#!/usr/bin/env bash
# Usage: bash scripts/make-signing-cert.sh [output folder, default ./signing]
# Creates a SELF-SIGNED code-signing certificate for Sarang.md (RSA 3072, SHA-256, 5 years).
# A self-signed certificate proves the file was not altered after signing and gives it a stable publisher name,
# but Windows does not trust it, so SmartScreen still shows "Unknown publisher" on other PCs.
set -euo pipefail
OUT="${1:-signing}"; mkdir -p "$OUT"; cd "$OUT"
[ -f sarang-md-signing.pfx ] && { echo "already exists"; exit 0; }
PASS=$(openssl rand -base64 18 | tr -d '/+=' | cut -c1-20)
cat > openssl.cnf <<CNF
[req]
distinguished_name=dn
x509_extensions=ext
prompt=no
[dn]
CN=Sarang.md
O=Sarang
C=DE
[ext]
basicConstraints=critical,CA:false
keyUsage=critical,digitalSignature
extendedKeyUsage=codeSigning
subjectKeyIdentifier=hash
CNF
openssl req -x509 -newkey rsa:3072 -sha256 -days 1825 -nodes -keyout key.pem -out sarang-md-signing.cer -config openssl.cnf
openssl pkcs12 -export -inkey key.pem -in sarang-md-signing.cer -out sarang-md-signing.pfx -name "Sarang.md" -passout "pass:$PASS"
shred -u key.pem 2>/dev/null || rm -f key.pem
echo "$PASS" > PASSWORD.txt; chmod 600 PASSWORD.txt sarang-md-signing.pfx
openssl x509 -in sarang-md-signing.cer -noout -subject -dates -fingerprint -sha256
