# Circles, radians and sectors

> **SL 3.4 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define the radian and convert between degrees and radians in both directions, giving answers as exact multiples of $\pi$ where appropriate;
- use the formulas for arc length $l=r\theta$ and sector area $A=\dfrac12r^{2}\theta$, and explain why they are true;
- find the perimeter of a sector and of a combined shape built from arcs and straight lines;
- find the length of a chord and the area of a **segment** using trigonometry;
- solve problems in which the unknown is the radius or the angle, including problems that lead to equations;
- use sectors to model cones, wiper sweeps, pendulums and distances along the Earth;
- explain why radians are the natural unit for calculus and trigonometric functions;
- set the GDC to radian mode and recognise when it matters.

## Why this topic matters

Degrees are a convenient human invention: a full turn is divided into $360$ parts because $360$ has many divisors. Radians are a *mathematical* unit: an angle is measured by the length of arc it cuts off on a circle of radius one. This makes formulas simple. The arc length is just $r\theta$ and the area of a sector is $\dfrac12r^{2}\theta$, with no stray factors of $\pi$ or $360$. More importantly, calculus becomes simple only in radians: the derivative of $\sin x$ is $\cos x$ only when $x$ is in radians. For this reason, from this point on the course (including all of SL 3.5 to 3.8 and Unit 5) uses radians unless degrees are explicitly stated. In practical terms, circles and sectors describe gears, pizza slices, windscreen wipers, the sweep of a lighthouse beam, and the bend of a road. Some of the examination's favourite problems combine a sector and a triangle, so that the area of the segment appears; others ask you to maximise the area of a sector with a given perimeter; and others use sectors to build cones. This chapter develops each of these, and sets up the unit circle of SL 3.5.

## Core ideas

### The radian

One **radian** is the angle subtended at the centre of a circle by an arc whose length equals the radius. More generally, for an arc of length $l$ on a circle of radius $r$, the angle at the centre is
$$
\theta=\frac lr\quad\text{radians}.
$$
Since the circumference is $2\pi r$, a full turn is $\dfrac{2\pi r}r=2\pi$ radians. Hence
$$
2\pi\ \text{rad}=360^{\circ},\qquad \pi\ \text{rad}=180^{\circ},\qquad 1\ \text{rad}=\frac{180^{\circ}}\pi\approx57.3^{\circ}.
$$
Radians are a ratio of two lengths, so they are dimensionless; the abbreviation "rad" is often omitted, and a number such as $\sin2$ is assumed to be in radians if no degree sign is written.

### Converting

To convert degrees to radians, multiply by $\dfrac\pi{180}$; to convert radians to degrees, multiply by $\dfrac{180}\pi$. Learn the common values:

- $30^{\circ}=\dfrac\pi6$, $45^{\circ}=\dfrac\pi4$, $60^{\circ}=\dfrac\pi3$, $90^{\circ}=\dfrac\pi2$;
- $120^{\circ}=\dfrac{2\pi}3$, $135^{\circ}=\dfrac{3\pi}4$, $150^{\circ}=\dfrac{5\pi}6$, $180^{\circ}=\pi$;
- $270^{\circ}=\dfrac{3\pi}2$ and $360^{\circ}=2\pi$.

Exact answers keep $\pi$: $150^{\circ}=\dfrac{150\pi}{180}=\dfrac{5\pi}6$. Decimal answers use the calculator: $2\ \text{rad}=114.6^{\circ}$. A useful check is that $\pi\approx3.14$ radians is about $180^{\circ}$, so an angle of about $1$ radian is slightly less than $60^{\circ}$.

### Arc length

A sector with angle $\theta$ (in radians) is the fraction $\dfrac\theta{2\pi}$ of the whole circle. So the arc length is that fraction of the circumference:
$$
l=\frac\theta{2\pi}\cdot2\pi r=r\theta.
$$
In degrees the formula is $l=\dfrac\theta{360}\times2\pi r$, which is the one in the formula booklet. The radian form is cleaner and is the one to use in this chapter. The **perimeter** of a sector includes the two radii: $P=2r+r\theta=r(2+\theta)$.

### Sector area

By the same fraction argument,
$$
A=\frac\theta{2\pi}\cdot\pi r^{2}=\frac12r^{2}\theta.
$$
In degrees: $A=\dfrac\theta{360}\times\pi r^{2}$. Note the nice relation $A=\dfrac12rl$ (half the radius times the arc length), analogous to the area of a triangle with base $l$ and height $r$. This is a quick route when the arc length is known.

### Chords and segments

A **chord** joins two points of a circle. In an isosceles triangle formed by the two radii and the chord, with apex angle $\theta$, the chord length is
$$
c=2r\sin\frac\theta2\qquad\left(\text{or by the cosine rule } c^{2}=2r^{2}-2r^{2}\cos\theta\right).
$$
A **segment** is the region between a chord and its arc. Its area is the sector area minus the triangle area:
$$
A_{\text{segment}}=\frac12r^{2}\theta-\frac12r^{2}\sin\theta=\frac12r^{2}(\theta-\sin\theta).
$$
This uses the triangle-area formula $\dfrac12ab\sin C$ with $a=b=r$ and $C=\theta$ (SL 3.2). This is for the *minor* segment when $\theta<\pi$. For a major segment (with $\theta>\pi$), the formula still holds with the reflex angle (the sine is then negative, so the triangle is added), or equivalently subtract the minor segment from the area of the circle.

The *perimeter* of a segment is the arc length plus the chord length: $r\theta+2r\sin\dfrac\theta2$.

### Solving for an unknown

In many problems the unknown is $r$ or $\theta$.

- Given arc length and radius: $\theta=\dfrac lr$.
- Given area and radius: $\theta=\dfrac{2A}{r^{2}}$.
- Given area and angle: $r=\sqrt{\dfrac{2A}\theta}$.
- Given the perimeter $P$ and $r$: $\theta=\dfrac Pr-2$.
- Given a chord $c$ and radius $r$: $\theta=2\sin^{-1}\dfrac c{2r}$.

For a segment given its area, the equation $\dfrac12r^{2}(\theta-\sin\theta)=A$ can only be solved numerically: use the GDC solver or a graph intersection.

### Optimisation: sector with fixed perimeter

A classic result: among all sectors with perimeter $P$, the one with the largest area has $\theta=2$ radians. To see this without calculus, write $P=2r+r\theta$, so $r\theta=P-2r$ and $A=\dfrac12r(r\theta)=\dfrac12r(P-2r)=\dfrac P2r-r^{2}$, a quadratic in $r$ with its maximum at $r=\dfrac P4$ (SL 2.6). Then $\theta=\dfrac{P-2r}{r}=\dfrac{P/2}{P/4}=2$ and $A_{\max}=\dfrac{P^{2}}{16}$. For $P=30$, $r=7.5$ and $A=56.25$.

### Cones from sectors

If a sector of radius $R$ and angle $\theta$ is rolled up to make a cone, then the slant height of the cone is $R$ and the circumference of its base equals the arc length of the sector: $2\pi r_{\text{cone}}=R\theta$. So $r_{\text{cone}}=\dfrac{R\theta}{2\pi}$ and the height is $h=\sqrt{R^{2}-r_{\text{cone}}^{2}}$. The curved surface area of the cone $\pi r_{\text{cone}}R$ equals the sector area $\dfrac12R^{2}\theta$, a useful check.

### Annular sectors

A sweep by a wiper blade from radius $r_1$ to $r_2$ through an angle $\theta$ covers the difference of two sectors:
$$
A=\frac12\theta\left(r_2^{2}-r_1^{2}\right).
$$
Perimeter-type problems with two arcs and two straight edges use $r_1\theta$ and $r_2\theta$ plus $2(r_2-r_1)$.

### Degrees or radians on the calculator

Check the mode. A GDC in degree mode evaluating $\sin2$ gives $0.0349$ (the sine of $2^{\circ}$), while in radian mode it gives $0.909$. For all of the formulas in this chapter, the angle is in radians, and for the unit circle and the trigonometric graphs later, radian mode is the default. Switch modes only when the question gives angles in degrees.

### Why radians are the natural unit

In radians, the small angle approximations hold: $\sin\theta\approx\theta$ and $\tan\theta\approx\theta$ for small $\theta$, because the chord $2r\sin\dfrac\theta2\approx r\theta$ is almost equal to the arc. This is why $\lim\limits_{\theta\to0}\dfrac{\sin\theta}\theta=1$ (Unit 5) in radians, and it is the reason why $\dfrac d{dx}\sin x=\cos x$ holds without an extra factor of $\dfrac\pi{180}$. In degrees, that derivative would be $\dfrac\pi{180}\cos x$, an ugly constant. All the elegant formulas of calculus and of Euler's formula $e^{i\theta}=\cos\theta+i\sin\theta$ (AHL 1.13) require radians.

## Worked examples

### Example 1 (conversions, 4 marks)

(a) Convert $150^{\circ}$ to radians in exact form. (b) Convert $\dfrac{7\pi}4$ to degrees. (c) Convert $2$ radians to degrees.

*Solution.* (a) $150\times\dfrac\pi{180}=\dfrac{5\pi}6$. (b) $\dfrac{7\pi}4\times\dfrac{180}\pi=315^{\circ}$. (c) $2\times\dfrac{180}\pi\approx114.6^{\circ}$.

### Example 2 (arc, area, perimeter, 5 marks)

A sector has radius $8$ cm and angle $1.2$ radians. Find the arc length, the area and the perimeter.

*Solution.* $l=8(1.2)=9.6$ cm. $A=\dfrac12(64)(1.2)=38.4\ \text{cm}^{2}$. The perimeter is $2(8)+9.6=25.6$ cm.

Check: $A=\dfrac12rl=\dfrac12(8)(9.6)=38.4$ ✓.

### Example 3 (angle in degrees, 4 marks)

A sector has radius $10$ cm and angle $70^{\circ}$. Find its arc length and area.

*Solution.* $\theta=70\times\dfrac\pi{180}=\dfrac{7\pi}{18}\approx1.2217$ rad. $l=10(1.2217)\approx12.2$ cm and $A=\dfrac12(100)(1.2217)\approx61.1\ \text{cm}^{2}$.

### Example 4 (finding the angle, 3 marks)

An arc of length $15$ cm is on a circle of radius $6$ cm. Find the angle subtended at the centre in radians and degrees.

*Solution.* $\theta=\dfrac{15}6=2.5$ rad. In degrees, $2.5\times\dfrac{180}\pi\approx143.2^{\circ}$.

### Example 5 (a segment, 6 marks)

A chord subtends an angle of $2$ radians at the centre of a circle of radius $10$ cm. Find the length of the chord and the area of the minor segment.

*Solution.* The chord is $2(10)\sin1\approx16.8$ cm. The segment area is $\dfrac12(100)(2-\sin2)=50(2-0.9093)\approx54.5\ \text{cm}^{2}$.

Check: the sector area is $\dfrac12(100)(2)=100$ and the triangle area is $\dfrac12(100)\sin2=45.5$, so $100-45.5=54.5$ ✓.

### Example 6 (find the radius, 3 marks)

A sector with angle $0.8$ radians has area $40\ \text{cm}^{2}$. Find the radius.

*Solution.* $40=\dfrac12r^{2}(0.8)=0.4r^{2}$, so $r^{2}=100$ and $r=10$ cm.

### Example 7 (maximum area with fixed perimeter, 7 marks)

A sector has perimeter $30$ cm. Find the radius and angle that give the largest area, and that area.

*Solution.* $2r+r\theta=30$ gives $r\theta=30-2r$. The area is $A=\dfrac12r(r\theta)=\dfrac12r(30-2r)=15r-r^{2}$. This is a downward parabola with its maximum at $r=7.5$ (the vertex, $-\dfrac b{2a}=\dfrac{15}2$). Then $\theta=\dfrac{30-15}{7.5}=2$ radians and $A=15(7.5)-56.25=56.25\ \text{cm}^{2}$.

### Example 8 (a cone from a sector, 8 marks)

A sector of radius $12$ cm is rolled up to form a cone with base radius $4$ cm. Find the angle of the sector and the volume of the cone.

*Solution.* The arc of the sector becomes the circumference of the base: $12\theta=2\pi(4)=8\pi$, so $\theta=\dfrac{2\pi}3$ (that is $120^{\circ}$). The slant height is $12$ cm, so the height is $\sqrt{144-16}=\sqrt{128}\approx11.31$ cm. The volume is $\dfrac13\pi(16)(11.31)\approx190\ \text{cm}^{3}$.

Check the surface area: sector area $\dfrac12(144)\dfrac{2\pi}3=48\pi$ and the curved cone area $\pi(4)(12)=48\pi$ ✓.

### Example 9 (a windscreen wiper, 5 marks)

A wiper blade extends from $20$ cm to $50$ cm from its pivot and sweeps through $110^{\circ}$. Find the area that it cleans.

*Solution.* $\theta=110\times\dfrac\pi{180}\approx1.920$ rad. $A=\dfrac12(1.920)(50^{2}-20^{2})=\dfrac12(1.920)(2100)\approx2016\ \text{cm}^{2}$.

### Example 10 (a chord and a segment, 7 marks)

A chord of length $12$ cm is in a circle of radius $10$ cm. Find the angle subtended at the centre, the arc length and the area of the minor segment.

*Solution.* $\sin\dfrac\theta2=\dfrac{12}{2(10)}=0.6$, so $\dfrac\theta2=\sin^{-1}0.6\approx0.6435$ and $\theta\approx1.287$ rad. The arc length is $10(1.287)\approx12.9$ cm. The segment area is $\dfrac12(100)(1.287-\sin1.287)=50(1.287-0.96)\approx16.4\ \text{cm}^{2}$.

Check: the sector area is $64.4$ and the triangle area is $\dfrac12(12)(8)=48$ (the height is $\sqrt{100-36}=8$), and $64.4-48=16.4$ ✓.

### Example 11 (distance on the Earth, 3 marks)

The Earth has a radius of about $6371$ km. How far is it along the equator between two points $3^{\circ}$ of longitude apart?

*Solution.* $\theta=3\times\dfrac\pi{180}=0.05236$ rad, so $l=6371(0.05236)\approx334$ km.

### Example 12 (a pendulum, 3 marks)

A pendulum of length $80$ cm swings through an angle of $0.3$ radians. Find the length of the arc traced by the bob.

*Solution.* $l=80(0.3)=24$ cm.

## Using your GDC

Set the GDC to **radian mode** for this chapter's formulas, and check the mode indicator before every calculation. To convert, use the $\pi$ key (never $3.14$) and store exact values. To solve an equation such as $\dfrac12r^{2}(\theta-\sin\theta)=A$ for $\theta$, plot $y=\dfrac12r^{2}(x-\sin x)$ and $y=A$ and use *intersect*, or use the solver; remember that the unknown $x$ is in radians. Many GDCs have a conversion command (for example, to degrees, labelled with a small superscript $\circ$ and the radian symbol $^{r}$) that converts between the units explicitly; this is useful when the problem mixes both units. A table of $\theta-\sin\theta$ shows how slowly a segment grows for small angles. Menu names vary by model. For graph questions, such as the sector area as a function of the radius for a fixed perimeter, the maximum tool gives the maximum without calculus.

## Common mistakes

1. **Using degrees in $l=r\theta$ or $A=\dfrac12r^{2}\theta$**: the angle must be in radians (or use the degree forms with $\dfrac\theta{360}$).
2. **Calculator in the wrong mode** for the angle unit used.
3. **Forgetting the radii in a sector's perimeter**: $P=2r+r\theta$ and not just $r\theta$.
4. **Confusing the sector with the segment**: the segment is the sector minus the triangle, and uses $\theta-\sin\theta$.
5. **Using $\sin\theta$ rather than $\sin\dfrac\theta2$** for the chord length.
6. **Rounding $\pi$ to $3.14$** and losing accuracy.
7. **Giving an angle without units**, so that the examiner cannot tell whether it is degrees or radians (write "rad" or "$^{\circ}$").
8. **For the cone from a sector**: forgetting that the sector radius is the slant height, not the base radius.

## Exam technique and command terms

**Find the exact value** requires the answer as a multiple of $\pi$ or in surd form. **Calculate** requires a decimal answer to $3$ significant figures. **Show that** often involves the sector or segment area formulas; show the substitution and the simplification clearly. **Hence** may require using an earlier result, such as the angle found from the chord. In a multi-part question on a sector and a triangle, the common structure is: (a) find the angle; (b) find the arc length or perimeter; (c) find the area of the sector; (d) find the area of the segment or shaded region.

Always draw the shape, with the radius, the angle, and the shaded region. If a shaded region is a sector minus a triangle, or the difference of two sectors, write that sentence first, then the formula. For a problem with a given perimeter and unknown $r$ and $\theta$, create an equation, solve it, and *check* with the perimeter. Give units: cm, cm$^{2}$ or rad.

## Connections

SL 3.1 gave the cone and its curved surface area, which can now be linked to sectors. SL 3.2 provided $\dfrac12ab\sin C$, which is used for the triangle in a segment, and the cosine rule gives the chord. SL 2.6 provided the quadratic optimisation used in Example 7. SL 3.5 uses radians to define the unit circle, with arc length on the unit circle equal to the angle, and SL 3.6 to 3.8 build on it with identities, graphs and equations, all in radians. AHL 3.9 to 3.11 extend the trigonometric ratios, and AHL 1.13 uses radian measure for the argument of a complex number. In Unit 5, the derivatives $\dfrac d{dx}\sin x=\cos x$ and $\dfrac d{dx}\cos x=-\sin x$ require radians, areas such as that of a circle sector can be found as integrals, and related-rates questions with a changing angle use $\dfrac{d\theta}{dt}$ in radians per second. In Unit 4, the normal curve is related to $\pi$, and a circular scatter of points has its area described by $\pi r^{2}$.

## Check your understanding

1. Convert (a) $225^{\circ}$ to radians (exact); (b) $\dfrac{11\pi}6$ to degrees; (c) $0.75$ rad to degrees.
2. A sector has radius $9$ cm and angle $0.8$ rad. Find the arc length, area and perimeter.
3. A sector has radius $12$ cm and angle $50^{\circ}$. Find the arc length and area.
4. An arc of length $21$ cm lies on a circle of radius $7$ cm. Find the angle in radians and degrees.
5. A chord subtends an angle of $1.5$ rad at the centre of a circle of radius $8$ cm. Find the chord length and the area of the minor segment.
6. A sector of radius $9$ cm has area $54\ \text{cm}^{2}$. Find its angle.
7. A sector has perimeter $40$ cm. Find the radius and the angle that give the greatest area, and that area.
8. A sector of radius $15$ cm and angle $144^{\circ}$ is rolled into a cone. Find the base radius and the volume.
9. A wiper blade extends from $15$ cm to $45$ cm from its pivot and sweeps $100^{\circ}$. Find the area cleaned.
10. A chord of length $16$ cm is in a circle of radius $10$ cm. Find the angle at the centre and the area of the minor segment.

### Answers

1. (a) $\dfrac{5\pi}4$; (b) $330^{\circ}$; (c) $0.75\times\dfrac{180}\pi\approx43.0^{\circ}$.
2. $l=9(0.8)=7.2$ cm; $A=\dfrac12(81)(0.8)=32.4\ \text{cm}^{2}$; $P=18+7.2=25.2$ cm.
3. $\theta=\dfrac{5\pi}{18}\approx0.8727$. $l=12(0.8727)\approx10.5$ cm and $A=\dfrac12(144)(0.8727)\approx62.8\ \text{cm}^{2}$.
4. $\theta=\dfrac{21}7=3$ rad, which is $\approx172^{\circ}$.
5. Chord $=2(8)\sin0.75\approx10.9$ cm. Segment area $=\dfrac12(64)(1.5-\sin1.5)=32(1.5-0.9975)\approx16.1\ \text{cm}^{2}$.
6. $54=\dfrac12(81)\theta$, so $\theta=\dfrac{108}{81}=\dfrac43\approx1.33$ rad.
7. $A=\dfrac12r(40-2r)=20r-r^{2}$, maximum at $r=10$. Then $\theta=\dfrac{40-20}{10}=2$ rad and $A=100\ \text{cm}^{2}$.
8. $\theta=144^{\circ}=\dfrac{4\pi}5$. The arc length is $15\cdot\dfrac{4\pi}5=12\pi$, so $2\pi r=12\pi$ and $r=6$ cm. The height is $\sqrt{225-36}=\sqrt{189}\approx13.75$ cm, so $V=\dfrac13\pi(36)(13.75)\approx518\ \text{cm}^{3}$.
9. $\theta=100\times\dfrac\pi{180}\approx1.745$. $A=\dfrac12(1.745)(45^{2}-15^{2})=\dfrac12(1.745)(1800)\approx1570\ \text{cm}^{2}$.
10. $\sin\dfrac\theta2=0.8$, so $\theta=2\sin^{-1}0.8\approx1.855$ rad ($106.3^{\circ}$). The segment area is $\dfrac12(100)(1.855-\sin1.855)=50(1.855-0.96)\approx44.7\ \text{cm}^{2}$.

## Summary

- A radian is the angle for which arc length equals radius; $\pi$ rad $=180^{\circ}$; convert with $\frac\pi{180}$ or $\frac{180}\pi$.
- Arc $l=r\theta$; sector area $A=\frac12r^{2}\theta=\frac12rl$; sector perimeter $r(2+\theta)$.
- Chord $c=2r\sin\frac\theta2$; segment area $\frac12r^{2}(\theta-\sin\theta)$.
- Fixed perimeter: the largest sector has $\theta=2$ rad, $r=\frac P4$.
- A sector rolls into a cone with slant height $R$ and $2\pi r=R\theta$; a wiper sweep is $\frac12\theta(r_2^{2}-r_1^{2})$.
- Radians are the natural unit for trigonometry and calculus; check the calculator mode.
