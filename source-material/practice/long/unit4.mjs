// Original long-form questions, Statistics and Probability SL 4.1 to AHL 4.14. Independently
// written practice with M/A/R/AG style mark allocations. Not an IB publication or official mark scheme.
const Q = (code, slug, paper, prompt, scheme, verify) => ({ code, slug, paper, prompt, scheme, verify });
const regression = (x, y) => {
  const n = x.length, mx = x.reduce((s, v) => s + v, 0) / n, my = y.reduce((s, v) => s + v, 0) / n;
  const sxy = x.reduce((s, v, i) => s + (v - mx) * (y[i] - my), 0), sxx = x.reduce((s, v) => s + (v - mx) ** 2, 0), syy = y.reduce((s, v) => s + (v - my) ** 2, 0);
  return { mx, my, sxy, sxx, syy, r: sxy / Math.sqrt(sxx * syy), b: sxy / sxx, a: my - sxy / sxx * mx, bx: sxy / syy, ax: mx - sxy / syy * my };
};
const chi = (obs) => {
  const rows = obs.map((r) => r.reduce((s, v) => s + v, 0)), cols = obs[0].map((_, j) => obs.reduce((s, r) => s + r[j], 0)), n = rows.reduce((s, v) => s + v, 0);
  let c = 0; obs.forEach((r, i) => r.forEach((o, j) => { const e = rows[i] * cols[j] / n; c += (o - e) ** 2 / e; }));
  return { chi2: c, df: (obs.length - 1) * (obs[0].length - 1) };
};
export const questions = [
  Q('SL 4.1', 'stratified-school-sample', 'P1',
    String.raw`A school has $1200$ students: $360$ in Year 9, $320$ in Year 10, $280$ in Year 11 and $240$ in Year 12. A sample of $60$ students is to be chosen.

(a) Find the number of students to be chosen from each year group in a stratified sample. [3]

(b) State one advantage of stratified sampling over simple random sampling. [1]

(c) A teacher proposes using the first $60$ students to arrive at school. Explain why this sample is not random. [1]`,
    [['M1', 1, String.raw`The sampling fraction is $\dfrac{60}{1200}=\dfrac1{20}$.`],
     ['A1', 1, String.raw`Year 9: $18$ students and Year 10: $16$ students.`],
     ['A2', 1, String.raw`Year 11: $14$ students and Year 12: $12$ students (total $60$).`],
     ['R1', 1, String.raw`Every year group is represented in proportion to its size, whereas a simple random sample might by chance under-represent a group.`],
     ['R2', 1, String.raw`Early arrivals are a convenience sample: students who arrive early may differ systematically (for example by transport), and not every student has an equal chance of selection.`]],
    (L) => { L.close(360 / 20 + 320 / 20 + 280 / 20 + 240 / 20, 60); L.close(360 / 20, 18); L.close(240 / 20, 12); }),

  Q('SL 4.1', 'systematic-sampling-bias', 'P2',
    String.raw`A factory produces $1500$ items each day. An inspector uses systematic sampling to choose $60$ items.

(a) Find the sampling interval. [2]

(b) The first item chosen is number $17$. Write down the numbers of the next two items chosen and the number of the last item chosen. [2]

(c) A machine develops a fault that damages every $25$th item it makes. Explain why the sample could give a misleading picture of the fault. [2]

(d) State one change to the method that would reduce this risk. [1]`,
    [['M1', 1, String.raw`Interval $=\dfrac{1500}{60}$.`],
     ['A1', 1, String.raw`$25$.`],
     ['A2', 1, String.raw`The next two items are $42$ and $67$.`],
     ['A3', 1, String.raw`The last item is $17+25\times59=1492$.`],
     ['R1', 1, String.raw`The sampling interval matches the period of the fault, so the sample would contain either all damaged items or none of them.`],
     ['R2', 1, String.raw`Either way the defect rate in the sample would be $100\%$ or $0\%$, far from the true rate of $4\%$.`],
     ['R3', 1, String.raw`Use a simple random sample, or choose the starting point and interval at random each day so the pattern cannot line up.`]],
    (L) => { L.close(1500 / 60, 25); L.close(17 + 25 * 59, 1492); L.close(1 / 25, 0.04); }),

  Q('SL 4.2', 'quartiles-and-outliers', 'P1',
    String.raw`Twelve values are: $4,\ 7,\ 8,\ 9,\ 11,\ 12,\ 12,\ 14,\ 15,\ 17,\ 21,\ 35$.

(a) Find the median, the lower quartile and the upper quartile. [3]

(b) Find the interquartile range. [1]

(c) Use the rule that an outlier lies more than $1.5\times\text{IQR}$ above $Q_3$ or below $Q_1$ to decide whether $35$ is an outlier. [2]`,
    [['M1', 1, String.raw`The median is the mean of the 6th and 7th values: $\dfrac{12+12}{2}=12$.`],
     ['A1', 1, String.raw`Lower half $4,7,8,9,11,12$ has median $Q_1=\dfrac{8+9}{2}=8.5$.`],
     ['A2', 1, String.raw`Upper half $12,14,15,17,21,35$ has median $Q_3=\dfrac{15+17}{2}=16$.`],
     ['A3', 1, String.raw`$\text{IQR}=16-8.5=7.5$.`],
     ['M2', 1, String.raw`Upper fence $=16+1.5(7.5)=27.25$.`],
     ['R1', 1, String.raw`$35>27.25$, so $35$ is an outlier.`]],
    (L) => { const a = [4, 7, 8, 9, 11, 12, 12, 14, 15, 17, 21, 35]; const med = (v) => { const n = v.length; return n % 2 ? v[(n - 1) / 2] : (v[n / 2 - 1] + v[n / 2]) / 2; }; L.close(med(a), 12); L.close(med(a.slice(0, 6)), 8.5); L.close(med(a.slice(6)), 16); L.close(16 + 1.5 * 7.5, 27.25); }),

  Q('SL 4.2', 'cumulative-frequency-estimates', 'P2',
    String.raw`The times, $x$ minutes, taken by $50$ students to finish a puzzle are summarised below.

| Time $x$ | $0<x\leq10$ | $10<x\leq20$ | $20<x\leq30$ | $30<x\leq40$ | $40<x\leq60$ |
|---|---|---|---|---|---|
| Frequency | 4 | 10 | 16 | 12 | 8 |

(a) Write down the cumulative frequencies. [2]

(b) Estimate the median time, using linear interpolation. [3]

(c) Estimate the lower and upper quartiles and the interquartile range. [3]

(d) Assuming times in the last class are spread evenly, estimate how many students took more than $45$ minutes. [1]`,
    [['A1', 1, String.raw`Cumulative frequencies for the first three classes: $4$, $14$, $30$.`],
     ['A2', 1, String.raw`Cumulative frequencies for the last two classes: $42$, $50$.`],
     ['M1', 1, String.raw`The median is the $25$th value, which lies in $20<x\leq30$ (cumulative $14$ to $30$).`],
     ['M2', 1, String.raw`$20+\dfrac{25-14}{16}\times10$.`],
     ['A3', 1, String.raw`Median $\approx26.9$ minutes.`],
     ['M3', 1, String.raw`Positions $12.5$ and $37.5$: $Q_1=10+\dfrac{12.5-4}{10}\times10$ and $Q_3=30+\dfrac{37.5-30}{12}\times10$.`],
     ['A4', 1, String.raw`$Q_1=18.5$ and $Q_3=36.25$.`],
     ['A5', 1, String.raw`$\text{IQR}=36.25-18.5=17.75$ minutes.`],
     ['R1', 1, String.raw`$45$ to $60$ is $\dfrac{15}{20}$ of the last class, so about $0.75\times8=6$ students.`]],
    (L) => { L.close(20 + 11 / 16 * 10, 26.875); L.close(10 + 8.5 / 10 * 10, 18.5); L.close(30 + 7.5 / 12 * 10, 36.25); L.close(36.25 - 18.5, 17.75); L.close(0.75 * 8, 6); L.close(4 + 10 + 16 + 12 + 8, 50); }),

  Q('SL 4.3', 'mean-sd-and-transformation', 'P1',
    String.raw`A data set is $4,\ 6,\ 7,\ 9,\ 14$.

(a) Find the mean. [1]

(b) Find the standard deviation, correct to three significant figures. [2]

(c) Each value is transformed using $y=3x-2$. Find the mean and standard deviation of the new data. [3]`,
    [['A1', 1, String.raw`Mean $=\dfrac{4+6+7+9+14}{5}=8$.`],
     ['M1', 1, String.raw`$\sum(x-8)^2=16+4+1+1+36=58$, so the variance is $\dfrac{58}{5}=11.6$.`],
     ['A2', 1, String.raw`$\sigma=\sqrt{11.6}=3.41$.`],
     ['M2', 1, String.raw`The mean transforms in the same way as the data: $3(8)-2=22$.`],
     ['M3', 1, String.raw`Subtracting $2$ does not change the spread; multiplying by $3$ multiplies the standard deviation by $3$.`],
     ['A3', 1, String.raw`New mean $22$ and new standard deviation $3\times3.406=10.2$.`]],
    (L) => { const a = [4, 6, 7, 9, 14]; L.close(L.mean(a), 8); L.close(L.sd(a), 3.406, 1e-3); L.close(L.mean(a.map((v) => 3 * v - 2)), 22); L.close(L.sd(a.map((v) => 3 * v - 2)), 10.2, 2e-3); }),

  Q('SL 4.3', 'grouped-mean-and-sd', 'P2',
    String.raw`The puzzle times of $50$ students are summarised in this table.

| Time $x$ | $0<x\leq10$ | $10<x\leq20$ | $20<x\leq30$ | $30<x\leq40$ | $40<x\leq60$ |
|---|---|---|---|---|---|
| Frequency | 4 | 10 | 16 | 12 | 8 |

(a) Estimate the mean time. [3]

(b) Estimate the standard deviation, correct to three significant figures. [3]

(c) Write down the modal class. [1]

(d) Explain why the answers to (a) and (b) are only estimates. [1]`,
    [['M1', 1, String.raw`Use class midpoints $5,\ 15,\ 25,\ 35,\ 50$.`],
     ['M2', 1, String.raw`$\sum fx=20+150+400+420+400=1390$.`],
     ['A1', 1, String.raw`Mean $\approx\dfrac{1390}{50}=27.8$ minutes.`],
     ['M3', 1, String.raw`$\sum fx^2=100+2250+10000+14700+20000=47050$.`],
     ['M4', 1, String.raw`Variance $=\dfrac{47050}{50}-27.8^2=941-772.84=168.16$.`],
     ['A2', 1, String.raw`$\sigma\approx13.0$ minutes.`],
     ['A3', 1, String.raw`The modal class is $20<x\leq30$ (highest frequency $16$).`],
     ['R1', 1, String.raw`The individual times are unknown, so each value is replaced by its class midpoint.`]],
    (L) => { const f = [4, 10, 16, 12, 8], m = [5, 15, 25, 35, 50]; const n = 50; const mu = f.reduce((s, v, i) => s + v * m[i], 0) / n; L.close(mu, 27.8); L.close(f.reduce((s, v, i) => s + v * m[i] ** 2, 0), 47050); L.close(Math.sqrt(f.reduce((s, v, i) => s + v * m[i] ** 2, 0) / n - mu * mu), 12.968, 1e-3); }),

  Q('SL 4.4', 'correlation-and-regression', 'P1',
    String.raw`The table shows five pairs of values.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $y$ | 3 | 5 | 6 | 9 | 10 |

You are given $\sum(x-\bar x)(y-\bar y)=18$, $\sum(x-\bar x)^2=10$ and $\sum(y-\bar y)^2=33.2$.

(a) Find Pearson's correlation coefficient $r$, to three significant figures. [2]

(b) Find the equation of the regression line of $y$ on $x$. [3]

(c) Use your equation to estimate $y$ when $x=3.5$. [1]

(d) Interpret the gradient of the line. [1]`,
    [['M1', 1, String.raw`$r=\dfrac{18}{\sqrt{10\times33.2}}$.`],
     ['A1', 1, String.raw`$r=0.988$.`],
     ['M2', 1, String.raw`Gradient $=\dfrac{\sum(x-\bar x)(y-\bar y)}{\sum(x-\bar x)^2}=\dfrac{18}{10}=1.8$, with $\bar x=3$ and $\bar y=6.6$.`],
     ['M3', 1, String.raw`The line passes through $(\bar x,\bar y)$: $y-6.6=1.8(x-3)$.`],
     ['A2', 1, String.raw`$y=1.8x+1.2$.`],
     ['A3', 1, String.raw`$y=1.8(3.5)+1.2=7.5$.`],
     ['R1', 1, String.raw`On average $y$ increases by $1.8$ for each one-unit increase in $x$.`]],
    (L) => { const g = regression([1, 2, 3, 4, 5], [3, 5, 6, 9, 10]); L.close(g.sxy, 18); L.close(g.sxx, 10); L.close(g.syy, 33.2); L.close(g.r, 0.988, 1e-3); L.close(g.b, 1.8); L.close(g.a, 1.2); L.close(g.a + g.b * 3.5, 7.5); }),

  Q('SL 4.4', 'revision-and-marks', 'P2',
    String.raw`Six students record the number of hours $x$ they revised and their test mark $y$ (out of $100$).

| $x$ | 2 | 4 | 5 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|
| $y$ | 41 | 52 | 58 | 70 | 73 | 88 |

(a) Find Pearson's correlation coefficient and describe the correlation. [2]

(b) Find the equation of the regression line of $y$ on $x$, with coefficients to three significant figures. [3]

(c) Estimate the mark of a student who revises for $6$ hours. [2]

(d) A student suggests using the line to predict the mark after $20$ hours. Explain why this is not appropriate. [2]`,
    [['A1', 1, String.raw`$r=0.998$.`],
     ['R1', 1, String.raw`The correlation is very strong and positive.`],
     ['M1', 1, String.raw`Use the regression facility of the GDC with $x$ as the explanatory variable.`],
     ['A2', 1, String.raw`Gradient $5.76$.`],
     ['A3', 1, String.raw`Intercept $29.1$, so $y=5.76x+29.1$.`],
     ['M2', 1, String.raw`Substitute $x=6$: $5.762(6)+29.095$.`],
     ['A4', 1, String.raw`About $64$ marks (this is the mean mark, since $6$ is the mean number of hours).`],
     ['R2', 1, String.raw`$x=20$ lies far outside the data range ($2$ to $10$), so this is extrapolation and the linear trend may not continue.`],
     ['R3', 1, String.raw`The line would give $144$ marks, which is impossible for a test marked out of $100$.`]],
    (L) => { const g = regression([2, 4, 5, 7, 8, 10], [41, 52, 58, 70, 73, 88]); L.close(g.r, 0.9975, 1e-3); L.close(g.b, 5.762, 1e-3); L.close(g.a, 29.095, 1e-3); L.close(g.a + g.b * 6, 63.67, 1e-3); L.close(g.a + g.b * 20, 144.3, 1e-3); }),

  Q('SL 4.5', 'venn-and-expected', 'P1',
    String.raw`In a class of $30$ students, $18$ play football ($F$), $12$ play tennis ($T$) and $5$ play both.

(a) Find the probability that a randomly chosen student plays neither sport. [2]

(b) Find the probability that a randomly chosen student plays football only. [2]

(c) In a school of $600$ students with the same proportions, estimate how many play neither sport. [2]`,
    [['M1', 1, String.raw`$n(F\cup T)=18+12-5=25$, so $5$ students play neither.`],
     ['A1', 1, String.raw`$P(\text{neither})=\dfrac{5}{30}=\dfrac16$.`],
     ['M2', 1, String.raw`Football only: $18-5=13$ students.`],
     ['A2', 1, String.raw`$P(F\text{ only})=\dfrac{13}{30}$.`],
     ['M3', 1, String.raw`Expected number $=600\times\dfrac16$.`],
     ['A3', 1, String.raw`$100$ students.`]],
    (L) => { L.close(30 - (18 + 12 - 5), 5); L.close(600 * 5 / 30, 100); L.close(18 - 5, 13); }),

  Q('SL 4.5', 'two-dice-sevens', 'P2',
    String.raw`Two fair six-sided dice are thrown and the scores are added.

(a) Show that the probability that the sum is $7$ equals $\dfrac16$. [2]

(b) The dice are thrown $120$ times. Find the expected number of times the sum is $7$. [1]

(c) The dice are thrown $3$ times. Find the probability that the sum is $7$ at least once. [2]

(d) Find the probability that the sum is at least $10$. [2]`,
    [['M1', 1, String.raw`The total number of equally likely outcomes is $36$, and the favourable outcomes are $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$.`],
     ['AG1', 1, String.raw`$P(7)=\dfrac{6}{36}=\dfrac16$.`],
     ['A1', 1, String.raw`Expected number $=120\times\dfrac16=20$.`],
     ['M2', 1, String.raw`Use the complement: $1-P(\text{no sevens})=1-\left(\dfrac56\right)^3$.`],
     ['A2', 1, String.raw`$\dfrac{91}{216}=0.421$.`],
     ['M3', 1, String.raw`Sum $10$: $3$ outcomes; sum $11$: $2$ outcomes; sum $12$: $1$ outcome.`],
     ['A3', 1, String.raw`$P=\dfrac{3+2+1}{36}=\dfrac16$.`]],
    (L) => { let seven = 0, ten = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) { if (a + b === 7) seven++; if (a + b >= 10) ten++; } L.close(seven, 6); L.close(ten, 6); L.close(1 - (5 / 6) ** 3, 91 / 216); L.close(91 / 216, 0.4213, 1e-3); }),

  Q('SL 4.6', 'independence-check', 'P1',
    String.raw`Events $A$ and $B$ satisfy $P(A)=0.5$, $P(B)=0.4$ and $P(A\cup B)=0.7$.

(a) Find $P(A\cap B)$. [2]

(b) Show that $A$ and $B$ are independent. [2]

(c) Find $P(A\mid B)$. [1]

(d) Find $P(A'\cap B)$. [1]`,
    [['M1', 1, String.raw`$P(A\cup B)=P(A)+P(B)-P(A\cap B)$, so $0.7=0.9-P(A\cap B)$.`],
     ['A1', 1, String.raw`$P(A\cap B)=0.2$.`],
     ['M2', 1, String.raw`$P(A)\times P(B)=0.5\times0.4=0.2$.`],
     ['R1', 1, String.raw`This equals $P(A\cap B)$, so the events are independent.`],
     ['A2', 1, String.raw`$P(A\mid B)=\dfrac{0.2}{0.4}=0.5$ (equal to $P(A)$, as expected).`],
     ['A3', 1, String.raw`$P(A'\cap B)=P(B)-P(A\cap B)=0.4-0.2=0.2$.`]],
    (L) => { L.close(0.5 + 0.4 - 0.7, 0.2); L.close(0.5 * 0.4, 0.2); L.close(0.2 / 0.4, 0.5); L.close(0.4 - 0.2, 0.2); }),

  Q('SL 4.6', 'bag-without-replacement', 'P2',
    String.raw`A bag contains $5$ red and $3$ blue counters. Two counters are drawn one after the other without replacement.

(a) Find the probability that both counters are red. [2]

(b) Find the probability that the counters are different colours. [3]

(c) Find the probability that the second counter is red, given that the first was blue. [1]

(d) Given that the second counter is red, find the probability that the first was also red. [2]`,
    [['M1', 1, String.raw`$P(RR)=\dfrac58\times\dfrac47$.`],
     ['A1', 1, String.raw`$\dfrac{20}{56}=\dfrac{5}{14}$.`],
     ['M2', 1, String.raw`$P(RB)=\dfrac58\times\dfrac37=\dfrac{15}{56}$.`],
     ['M3', 1, String.raw`$P(BR)=\dfrac38\times\dfrac57=\dfrac{15}{56}$.`],
     ['A2', 1, String.raw`$P(\text{different})=\dfrac{30}{56}=\dfrac{15}{28}$.`],
     ['A3', 1, String.raw`After a blue counter is removed, $5$ of the remaining $7$ are red: $\dfrac57$.`],
     ['M4', 1, String.raw`$P(R_2)=\dfrac{20}{56}+\dfrac{15}{56}=\dfrac{35}{56}=\dfrac58$, and $P(R_1\mid R_2)=\dfrac{P(RR)}{P(R_2)}$.`],
     ['A4', 1, String.raw`$\dfrac{20/56}{35/56}=\dfrac47$.`]],
    (L) => { L.close(5 / 8 * 4 / 7, 5 / 14); L.close(2 * 15 / 56, 15 / 28); L.close(35 / 56, 5 / 8); L.close(20 / 35, 4 / 7); }),

  Q('SL 4.7', 'linear-pmf', 'P1',
    String.raw`The discrete random variable $X$ has $P(X=x)=kx$ for $x=1,2,3,4$, and zero otherwise.

(a) Find the value of $k$. [2]

(b) Find $E(X)$. [2]

(c) Find $\text{Var}(X)$. [2]`,
    [['M1', 1, String.raw`The probabilities sum to $1$: $k(1+2+3+4)=1$.`],
     ['A1', 1, String.raw`$k=\dfrac1{10}$.`],
     ['M2', 1, String.raw`$E(X)=\sum xP(X=x)=\dfrac{1}{10}(1+4+9+16)$.`],
     ['A2', 1, String.raw`$E(X)=3$.`],
     ['M3', 1, String.raw`$E(X^2)=\dfrac1{10}(1+8+27+64)=10$, and $\text{Var}(X)=E(X^2)-[E(X)]^2$.`],
     ['A3', 1, String.raw`$\text{Var}(X)=10-9=1$.`]],
    (L) => { const p = [1, 2, 3, 4].map((x) => x / 10); L.close(p.reduce((s, v) => s + v, 0), 1); const e = p.reduce((s, v, i) => s + v * (i + 1), 0); L.close(e, 3); L.close(p.reduce((s, v, i) => s + v * (i + 1) ** 2, 0) - e * e, 1); }),

  Q('SL 4.7', 'spinner-game-fair-fee', 'P2',
    String.raw`In a fair-ground game a spinner pays out $W$ euros: €10 with probability $0.1$, €3 with probability $0.3$, and nothing with probability $0.6$.

(a) Find the expected payout $E(W)$. [2]

(b) The organiser charges €2 per game. Find the organiser's expected profit per game. [2]

(c) Find the organiser's expected profit over $250$ games. [1]

(d) Find the standard deviation of $W$, to three significant figures. [2]`,
    [['M1', 1, String.raw`$E(W)=10(0.1)+3(0.3)+0(0.6)$.`],
     ['A1', 1, String.raw`$E(W)=1.9$, that is €1.90.`],
     ['M2', 1, String.raw`Expected profit $=2-E(W)$.`],
     ['A2', 1, String.raw`€0.10 per game.`],
     ['A3', 1, String.raw`$250\times0.10=$ €25.`],
     ['M3', 1, String.raw`$E(W^2)=100(0.1)+9(0.3)=12.7$, so $\text{Var}(W)=12.7-1.9^2=9.09$.`],
     ['A4', 1, String.raw`Standard deviation $=\sqrt{9.09}=3.02$.`]],
    (L) => { const ew = 10 * 0.1 + 3 * 0.3; L.close(ew, 1.9); L.close(2 - ew, 0.1); L.close(250 * 0.1, 25); L.close(Math.sqrt(12.7 - ew * ew), 3.015, 1e-3); }),

  Q('SL 4.8', 'binomial-four-trials', 'P1',
    String.raw`The random variable $X$ follows a binomial distribution with $n=4$ and $p=0.5$.

(a) Find $P(X=2)$. [2]

(b) Find $P(X\geq3)$. [2]

(c) Write down $E(X)$ and $\text{Var}(X)$. [2]`,
    [['M1', 1, String.raw`$P(X=2)=\binom42(0.5)^2(0.5)^2=6\times\dfrac1{16}$.`],
     ['A1', 1, String.raw`$\dfrac38$.`],
     ['M2', 1, String.raw`$P(X\geq3)=P(X=3)+P(X=4)=\dfrac{4}{16}+\dfrac1{16}$.`],
     ['A2', 1, String.raw`$\dfrac5{16}$.`],
     ['A3', 1, String.raw`$E(X)=np=2$.`],
     ['A4', 1, String.raw`$\text{Var}(X)=np(1-p)=1$.`]],
    (L) => { L.close(L.binom(4, 0.5, 2), 3 / 8); L.close(L.binom(4, 0.5, 3) + L.binom(4, 0.5, 4), 5 / 16); }),

  Q('SL 4.8', 'defective-items', 'P2',
    String.raw`Each item produced by a machine is independently defective with probability $0.05$. A sample of $20$ items is inspected. Let $X$ be the number of defective items.

(a) State two assumptions needed for $X$ to follow a binomial distribution. [2]

(b) Find the probability that at least one item in the sample is defective. [2]

(c) Find the smallest sample size $n$ for which the probability of at least one defective item exceeds $0.9$. [3]

(d) For the sample of $20$, find $P(X\leq2)$. [2]`,
    [['R1', 1, String.raw`There is a fixed number of trials ($20$), each with only two outcomes (defective or not), and a constant probability $0.05$ of a defect.`],
     ['R2', 1, String.raw`The trials are independent: one item being defective does not affect another.`],
     ['M1', 1, String.raw`$P(X\geq1)=1-P(X=0)=1-0.95^{20}$.`],
     ['A1', 1, String.raw`$0.642$.`],
     ['M2', 1, String.raw`Require $1-0.95^n>0.9$, that is $0.95^n<0.1$.`],
     ['M3', 1, String.raw`$n>\dfrac{\ln0.1}{\ln0.95}=44.9$ (the inequality reverses because $\ln0.95<0$).`],
     ['A2', 1, String.raw`$n=45$ (check: $1-0.95^{44}=0.895$ and $1-0.95^{45}=0.901$).`],
     ['M4', 1, String.raw`$P(X\leq2)=P(0)+P(1)+P(2)$, or use the binomial cumulative function with $n=20$, $p=0.05$.`],
     ['A3', 1, String.raw`$0.925$.`]],
    (L) => { L.close(1 - 0.95 ** 20, 0.6415, 1e-3); L.close(Math.log(0.1) / Math.log(0.95), 44.89, 1e-3); L.close(1 - 0.95 ** 44, 0.8953, 1e-3); L.close(1 - 0.95 ** 45, 0.9006, 1e-3); L.close(L.binom(20, 0.05, 0) + L.binom(20, 0.05, 1) + L.binom(20, 0.05, 2), 0.9245, 1e-3); }),

  Q('SL 4.9', 'normal-probabilities', 'P2',
    String.raw`The random variable $X$ is normally distributed with mean $50$ and standard deviation $8$.

(a) Find $P(X>60)$. [2]

(b) Find $P(40<X<55)$. [3]`,
    [['M1', 1, String.raw`Standardise: $z=\dfrac{60-50}{8}=1.25$, or use the normal cumulative function with $\mu=50$, $\sigma=8$.`],
     ['A1', 1, String.raw`$P(X>60)=0.106$.`],
     ['M2', 1, String.raw`Standardise the limits: $z=\dfrac{40-50}{8}=-1.25$ and $z=\dfrac{55-50}{8}=0.625$.`],
     ['M3', 1, String.raw`$P=\Phi(0.625)-\Phi(-1.25)$, or the normal cumulative function between $40$ and $55$.`],
     ['A2', 1, String.raw`$P(40<X<55)=0.628$.`]],
    (L) => { L.close(1 - L.normcdf(60, 50, 8), 0.10565, 1e-3); L.close(L.normcdf(55, 50, 8) - L.normcdf(40, 50, 8), 0.62836, 1e-3); }),

  Q('SL 4.9', 'plant-height-percentiles', 'P2',
    String.raw`The heights of a plant species, in cm, are normally distributed with mean $50$ and standard deviation $8$.

(a) Find the height $k$ such that $90\%$ of plants are shorter than $k$. [3]

(b) Find the interquartile range of the heights. [3]

(c) In a nursery with $500$ plants, estimate how many are taller than $60$ cm. [2]`,
    [['M1', 1, String.raw`$P(X<k)=0.9$; use the inverse normal function.`],
     ['A1', 1, String.raw`$z=1.2816$.`],
     ['A2', 1, String.raw`$k=50+1.2816\times8=60.3$ cm.`],
     ['M2', 1, String.raw`Quartiles correspond to $z=\pm0.6745$.`],
     ['M3', 1, String.raw`$Q_1=50-0.6745(8)=44.6$ and $Q_3=50+0.6745(8)=55.4$.`],
     ['A3', 1, String.raw`$\text{IQR}=55.4-44.6=10.8$ cm.`],
     ['M4', 1, String.raw`$P(X>60)=0.1056$ and the expected number is $500\times0.1056$.`],
     ['A4', 1, String.raw`About $53$ plants.`]],
    (L) => { L.close(50 + L.invPhi(0.9) * 8, 60.25, 1e-3); L.close(2 * L.invPhi(0.75) * 8, 10.79, 2e-3); L.close(500 * (1 - L.normcdf(60, 50, 8)), 52.8, 1e-2); }),

  Q('SL 4.10', 'x-on-y-line', 'P1',
    String.raw`Five pairs of values $(x,y)$ are $(1,3),\ (2,5),\ (3,6),\ (4,9),\ (5,10)$. You are given $\bar x=3$, $\bar y=6.6$, $\sum(x-\bar x)(y-\bar y)=18$ and $\sum(y-\bar y)^2=33.2$.

(a) State which regression line should be used to estimate $x$ from a given $y$. [1]

(b) Find the equation of this regression line, with coefficients to three significant figures. [3]

(c) Estimate $x$ when $y=8$. [2]`,
    [['R1', 1, String.raw`The line of $x$ on $y$, since $x$ is being estimated and the line of $y$ on $x$ minimises vertical, not horizontal, distances.`],
     ['M1', 1, String.raw`Gradient $=\dfrac{\sum(x-\bar x)(y-\bar y)}{\sum(y-\bar y)^2}=\dfrac{18}{33.2}=0.542$.`],
     ['M2', 1, String.raw`The line passes through $(\bar x,\bar y)$: $x-3=0.5422(y-6.6)$.`],
     ['A1', 1, String.raw`$x=0.542y-0.578$.`],
     ['M3', 1, String.raw`Substitute $y=8$: $0.5422(8)-0.5783$.`],
     ['A2', 1, String.raw`$x\approx3.76$.`]],
    (L) => { const g = regression([1, 2, 3, 4, 5], [3, 5, 6, 9, 10]); L.close(g.bx, 0.5422, 1e-3); L.close(g.ax, -0.5783, 1e-3); L.close(g.ax + g.bx * 8, 3.759, 1e-3); }),

  Q('SL 4.10', 'two-regression-lines', 'P2',
    String.raw`Six pairs of values are $(1,2),\ (2,6),\ (3,3),\ (4,8),\ (5,7),\ (6,10)$, with $\bar x=3.5$, $\bar y=6$ and $r=0.846$.

(a) Find the equation of the regression line of $y$ on $x$. [2]

(b) Find the equation of the regression line of $x$ on $y$. [2]

(c) Estimate $x$ when $y=9$, using the appropriate line. [1]

(d) A student rearranges the equation in (a) to estimate $x$ when $y=9$ and gets $5.69$. Explain why this differs from your answer to (c). [2]`,
    [['M1', 1, String.raw`Use the GDC with $x$ as the explanatory variable (the line passes through $(3.5,6)$).`],
     ['A1', 1, String.raw`$y=1.37x+1.20$.`],
     ['M2', 1, String.raw`Swap the roles of the variables in the GDC regression.`],
     ['A2', 1, String.raw`$x=0.522y+0.370$.`],
     ['A3', 1, String.raw`$x=0.5217(9)+0.3696=5.07$.`],
     ['R1', 1, String.raw`The line of $y$ on $x$ minimises vertical distances, so rearranging it does not give the line that minimises horizontal distances.`],
     ['R2', 1, String.raw`The two lines coincide only when $|r|=1$; here $r=0.846$, so the lines differ (the product of the gradients is $r^2=0.716$ rather than $1$).`]],
    (L) => { const g = regression([1, 2, 3, 4, 5, 6], [2, 6, 3, 8, 7, 10]); L.close(g.r, 0.8459, 1e-3); L.close(g.b, 1.3714, 1e-3); L.close(g.a, 1.2, 1e-3); L.close(g.bx, 0.5217, 1e-3); L.close(g.ax, 0.3696, 1e-3); L.close(g.ax + g.bx * 9, 5.065, 1e-3); L.close((9 - g.a) / g.b, 5.6875, 1e-3); L.close(g.b * g.bx, 0.7155, 1e-3); }),

  Q('SL 4.11', 'chi-squared-two-by-three', 'P2',
    String.raw`A survey of $200$ people records their age group ($A$ or $B$) and their preferred transport (car, bus, bicycle).

| | Car | Bus | Bicycle |
|---|---|---|---|
| Group $A$ | 20 | 30 | 50 |
| Group $B$ | 30 | 30 | 40 |

A $\chi^2$ test for independence is carried out at the $5\%$ significance level.

(a) State the null hypothesis. [1]

(b) Find the expected frequency for Group $A$ and Car, showing your method. [2]

(c) Find the value of the $\chi^2$ statistic. [2]

(d) Write down the number of degrees of freedom. [1]

(e) The $p$-value is $0.211$. State the conclusion, with a reason. [2]`,
    [['R1', 1, String.raw`$H_0$: age group and preferred transport are independent.`],
     ['M1', 1, String.raw`Expected $=\dfrac{\text{row total}\times\text{column total}}{\text{grand total}}=\dfrac{100\times50}{200}$.`],
     ['A1', 1, String.raw`$25$.`],
     ['M2', 1, String.raw`Expected frequencies are $25,30,45$ in both rows; $\chi^2=\sum\dfrac{(O-E)^2}{E}=2\left(\dfrac{25}{25}+0+\dfrac{25}{45}\right)$.`],
     ['A2', 1, String.raw`$\chi^2=3.11$.`],
     ['A3', 1, String.raw`$(2-1)(3-1)=2$ degrees of freedom.`],
     ['A4', 1, String.raw`$p=0.211>0.05$, so there is not enough evidence to reject $H_0$.`],
     ['R2', 1, String.raw`The data are consistent with age group and transport being independent (this does not prove independence).`]],
    (L) => { const c = chi([[20, 30, 50], [30, 30, 40]]); L.close(c.chi2, 3.1111, 1e-3); L.close(c.df, 2); L.close(Math.exp(-c.chi2 / 2), 0.2111, 1e-3); L.close(100 * 50 / 200, 25); }),

  Q('SL 4.11', 'chi-squared-two-by-two', 'P2',
    String.raw`In a trial, $50$ patients in each of two groups ($X$ and $Y$) were recorded as improved or not improved.

| | Improved | Not improved |
|---|---|---|
| Group $X$ | 30 | 20 |
| Group $Y$ | 18 | 32 |

A $\chi^2$ test for independence is carried out at the $5\%$ significance level.

(a) State the null and alternative hypotheses. [1]

(b) Show that the expected frequency for Group $X$ and Improved is $24$. [2]

(c) Find the value of the $\chi^2$ statistic. [2]

(d) Write down the number of degrees of freedom. [1]

(e) The $p$-value is $0.0163$. State the conclusion, with a reason. [2]`,
    [['R1', 1, String.raw`$H_0$: improvement is independent of group; $H_1$: improvement depends on group.`],
     ['M1', 1, String.raw`$\dfrac{\text{row total}\times\text{column total}}{\text{grand total}}=\dfrac{50\times48}{100}$.`],
     ['AG1', 1, String.raw`$24$ (the other expected values are $26$, $24$ and $26$).`],
     ['M2', 1, String.raw`$\chi^2=\dfrac{36}{24}+\dfrac{36}{26}+\dfrac{36}{24}+\dfrac{36}{26}$.`],
     ['A1', 1, String.raw`$\chi^2=5.77$.`],
     ['A2', 1, String.raw`$(2-1)(2-1)=1$ degree of freedom.`],
     ['A3', 1, String.raw`$p=0.0163<0.05$, so reject $H_0$.`],
     ['R2', 1, String.raw`There is evidence at the $5\%$ level that improvement depends on the group.`]],
    (L) => { const c = chi([[30, 20], [18, 32]]); L.close(c.chi2, 5.7692, 1e-3); L.close(c.df, 1); L.close(1 - L.erf(Math.sqrt(c.chi2 / 2)), 0.0163, 2e-2); L.close(50 * 48 / 100, 24); }),

  Q('SL 4.12', 'two-percentile-conditions', 'P2',
    String.raw`The random variable $X$ is normally distributed with mean $\mu$ and standard deviation $\sigma$. It is known that $P(X<40)=0.2$ and $P(X>70)=0.1$.

(a) Write down the $z$-values corresponding to $x=40$ and $x=70$. [2]

(b) Write two equations connecting $\mu$ and $\sigma$. [2]

(c) Solve the equations to find $\mu$ and $\sigma$, to three significant figures. [2]`,
    [['A1', 1, String.raw`For $x=40$: $P(Z<z)=0.2$ gives $z=-0.8416$.`],
     ['A2', 1, String.raw`For $x=70$: $P(Z<z)=0.9$ gives $z=1.2816$.`],
     ['M1', 1, String.raw`$\dfrac{40-\mu}{\sigma}=-0.8416$, so $40=\mu-0.8416\sigma$.`],
     ['M2', 1, String.raw`$\dfrac{70-\mu}{\sigma}=1.2816$, so $70=\mu+1.2816\sigma$.`],
     ['M3', 1, String.raw`Subtract: $30=2.1232\sigma$.`],
     ['A3', 1, String.raw`$\sigma=14.1$ and $\mu=40+0.8416(14.13)=51.9$.`]],
    (L) => { const z1 = L.invPhi(0.2), z2 = L.invPhi(0.9); L.close(z1, -0.8416, 1e-3); L.close(z2, 1.2816, 1e-3); const s = 30 / (z2 - z1); L.close(s, 14.13, 1e-3); L.close(40 - z1 * s, 51.89, 1e-3); }),

  Q('SL 4.12', 'filling-machine', 'P2',
    String.raw`A machine fills bottles. The volume $X$ ml is normally distributed with mean $502$ and standard deviation $\sigma$. It is found that $2\%$ of bottles contain less than $495$ ml.

(a) Find the $z$-value for which $P(Z<z)=0.02$. [2]

(b) Find the value of $\sigma$. [2]

(c) Find the probability that a bottle contains more than $510$ ml. [2]

(d) The mean is reset to $\mu$, with $\sigma$ unchanged, so that only $1\%$ of bottles contain less than $495$ ml. Find $\mu$. [2]`,
    [['M1', 1, String.raw`Use the inverse normal function with area $0.02$.`],
     ['A1', 1, String.raw`$z=-2.054$.`],
     ['M2', 1, String.raw`$\dfrac{495-502}{\sigma}=-2.054$.`],
     ['A2', 1, String.raw`$\sigma=3.41$.`],
     ['M3', 1, String.raw`$z=\dfrac{510-502}{3.408}=2.347$.`],
     ['A3', 1, String.raw`$P(X>510)=0.00946$.`],
     ['M4', 1, String.raw`For $1\%$, $z=-2.326$: $\dfrac{495-\mu}{3.408}=-2.326$.`],
     ['A4', 1, String.raw`$\mu=495+2.326(3.408)=503$ ml (to three significant figures).`]],
    (L) => { const z = L.invPhi(0.02); L.close(z, -2.0537, 1e-3); const s = -7 / z; L.close(s, 3.4084, 1e-3); L.close(1 - L.normcdf(510, 502, s), 0.00946, 1e-2); L.close(495 - L.invPhi(0.01) * s, 502.93, 1e-4); }),

  Q('AHL 4.13', 'screening-test-bayes', 'P1',
    String.raw`In a population, $10\%$ of people have a condition $D$. A screening test is positive for $90\%$ of people who have $D$, and positive for $10\%$ of people who do not.

(a) Find $P(D\cap\text{positive})$ and $P(D'\cap\text{positive})$. [2]

(b) Find $P(\text{positive})$. [1]

(c) A person tests positive. Use Bayes' theorem to find the probability that they have $D$. [2]

(d) Comment on your answer to part (c). [1]`,
    [['M1', 1, String.raw`$P(D\cap+)=0.1\times0.9=0.09$.`],
     ['A1', 1, String.raw`$P(D'\cap+)=0.9\times0.1=0.09$.`],
     ['A2', 1, String.raw`$P(+)=0.09+0.09=0.18$.`],
     ['M2', 1, String.raw`$P(D\mid+)=\dfrac{P(D\cap+)}{P(+)}=\dfrac{0.09}{0.18}$.`],
     ['A3', 1, String.raw`$P(D\mid+)=0.5$.`],
     ['R1', 1, String.raw`Although the test is accurate for each group, only half of those testing positive have the condition, because the condition is relatively rare, so many false positives arise.`]],
    (L) => { L.close(0.1 * 0.9, 0.09); L.close(0.9 * 0.1, 0.09); L.close(0.09 / 0.18, 0.5); }),

  Q('AHL 4.13', 'three-factories-bayes', 'P2',
    String.raw`Three factories $A$, $B$ and $C$ make $50\%$, $30\%$ and $20\%$ of a company's components. The proportions defective are $2\%$, $3\%$ and $6\%$ respectively. A component is chosen at random.

(a) Find the probability that it is defective. [3]

(b) Given that it is defective, find the probability that it came from factory $C$. [2]

(c) Show that the three conditional probabilities of the factories given a defect sum to $1$, and state which factory is most likely to be the source. [2]`,
    [['M1', 1, String.raw`Use the law of total probability across the three factories.`],
     ['M2', 1, String.raw`$P(D)=0.5(0.02)+0.3(0.03)+0.2(0.06)=0.01+0.009+0.012$.`],
     ['A1', 1, String.raw`$P(D)=0.031$.`],
     ['M3', 1, String.raw`$P(C\mid D)=\dfrac{P(C)P(D\mid C)}{P(D)}=\dfrac{0.012}{0.031}$.`],
     ['A2', 1, String.raw`$\dfrac{12}{31}=0.387$.`],
     ['M4', 1, String.raw`$P(A\mid D)=\dfrac{10}{31}$ and $P(B\mid D)=\dfrac9{31}$, so the sum is $\dfrac{10+9+12}{31}=1$.`],
     ['A3', 1, String.raw`Factory $C$ is the most likely source, even though it makes the fewest components.`]],
    (L) => { const pd = 0.5 * 0.02 + 0.3 * 0.03 + 0.2 * 0.06; L.close(pd, 0.031); L.close(0.012 / pd, 12 / 31); L.close(12 / 31, 0.3871, 1e-3); L.close(10 / 31 + 9 / 31 + 12 / 31, 1); }),

  Q('AHL 4.14', 'quadratic-pdf', 'P2',
    String.raw`The continuous random variable $X$ has probability density function $f(x)=kx(4-x)$ for $0\leq x\leq4$, and $f(x)=0$ otherwise.

(a) Show that $k=\dfrac{3}{32}$. [3]

(b) Find $E(X)$. [2]

(c) Find $\text{Var}(X)$. [3]`,
    [['M1', 1, String.raw`The total area under the pdf is $1$: $\displaystyle\int_0^4kx(4-x)\,dx=1$.`],
     ['M2', 1, String.raw`$k\left[2x^2-\dfrac{x^3}{3}\right]_0^4=k\left(32-\dfrac{64}{3}\right)=\dfrac{32k}{3}$.`],
     ['AG1', 1, String.raw`$\dfrac{32k}{3}=1$, so $k=\dfrac3{32}$.`],
     ['R1', 1, String.raw`The graph is a parabola symmetric about $x=2$, so the mean is at the line of symmetry.`],
     ['A1', 1, String.raw`$E(X)=2$ (this can be checked by integrating $\int_0^4xf(x)\,dx$).`],
     ['M3', 1, String.raw`$E(X^2)=\dfrac3{32}\displaystyle\int_0^4x^3(4-x)\,dx=\dfrac3{32}\left[x^4-\dfrac{x^5}{5}\right]_0^4$.`],
     ['A2', 1, String.raw`$E(X^2)=\dfrac{3}{32}\left(256-204.8\right)=4.8$.`],
     ['A3', 1, String.raw`$\text{Var}(X)=4.8-2^2=0.8$.`]],
    (L) => { const f = (x) => 3 / 32 * x * (4 - x); L.close(L.integ(f, 0, 4), 1); L.close(L.integ((x) => x * f(x), 0, 4), 2); L.close(L.integ((x) => x * x * f(x), 0, 4), 4.8); }),

  Q('AHL 4.14', 'linear-pdf-median-and-transform', 'P2',
    String.raw`The continuous random variable $X$ has probability density function $f(x)=2x$ for $0\leq x\leq1$, and $f(x)=0$ otherwise.

(a) Find the median of $X$, correct to three significant figures. [3]

(b) Find $E(X)$ and $\text{Var}(X)$. [3]

(c) Find $E(3X-2)$ and $\text{Var}(3X-2)$. [2]`,
    [['M1', 1, String.raw`The median $m$ satisfies $\displaystyle\int_0^m2x\,dx=0.5$.`],
     ['M2', 1, String.raw`$m^2=0.5$.`],
     ['A1', 1, String.raw`$m=\dfrac1{\sqrt2}=0.707$.`],
     ['M3', 1, String.raw`$E(X)=\displaystyle\int_0^12x^2\,dx=\dfrac23$.`],
     ['M4', 1, String.raw`$E(X^2)=\displaystyle\int_0^12x^3\,dx=\dfrac12$.`],
     ['A2', 1, String.raw`$\text{Var}(X)=\dfrac12-\dfrac49=\dfrac1{18}$.`],
     ['M5', 1, String.raw`$E(3X-2)=3E(X)-2=3\left(\dfrac23\right)-2=0$.`],
     ['A3', 1, String.raw`$\text{Var}(3X-2)=3^2\text{Var}(X)=\dfrac{9}{18}=\dfrac12$.`]],
    (L) => { const f = (x) => 2 * x; L.close(Math.SQRT1_2, 0.7071, 1e-3); L.close(L.integ((x) => x * f(x), 0, 1), 2 / 3); const e2 = L.integ((x) => x * x * f(x), 0, 1); L.close(e2 - 4 / 9, 1 / 18); L.close(9 / 18, 0.5); }),
];
