# Applications of trigonometry

> **SL 3.3 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- draw a clear diagram from a verbal description, with angles of elevation and depression correctly placed;
- use three-figure bearings, find back bearings and combine bearing information with the sine and cosine rules;
- solve problems with a vertical object observed from two positions;
- solve multi-step problems that require two or more triangles, passing information from one to the next;
- find the shortest distance from a point to a line using trigonometry;
- work with gradients, slopes and angles of inclination;
- apply the rules in three-dimensional configurations by extracting the relevant triangle;
- state assumptions, give answers to a sensible accuracy and interpret them in context.

## Why this topic matters

This is where trigonometry meets the real world. A surveyor wants the height of a hill without climbing it. A pilot wants to know the distance and direction from the airport after two legs of a flight. An engineer must know whether a ramp is steeper than the maximum allowed gradient. In every case, the mathematics is the right-angled triangle, the sine rule and the cosine rule from SL 3.2, but the *difficulty* is different: it lies in turning a paragraph of text into the right picture. Candidates who lose marks on trigonometry application questions usually lose them on the diagram, not on the calculation. They put the angle of depression at the wrong place, mix up bearings, or fail to notice that a bearing triangle has an angle that must be deduced from parallel lines. This chapter teaches the conventions (elevation, depression, three-figure bearings), the geometry of parallel lines that underlies bearing problems, and a reliable procedure for multi-step problems. The IB examinations love these contexts, and often combine them with the area formula or with a three-dimensional diagram, so that a single question can test several skills at once.

## Core ideas

### Angles of elevation and depression

The **angle of elevation** of an object is the angle above the horizontal from the observer's eye to the object. The **angle of depression** is the angle below the horizontal from the observer to an object lower than the observer. Always draw a horizontal line through the observer first; the angle is measured from it. By alternate angles (parallel lines), the angle of depression of a boat from a cliff top equals the angle of elevation of the cliff top from the boat. This fact is the key to many problems: the right-angled triangle formed by the cliff, the sea and the line of sight has the angle of depression as one of its angles (at the boat).

When the observer has a height (eyes $1.6$ m above the ground), add it to the height found, unless the question says to ignore it. State the assumption: "the ground is level and the tower is vertical".

### Three-figure bearings

A **bearing** is a direction measured **clockwise from north**, written with three figures: north is $000^{\circ}$, east $090^{\circ}$, south $180^{\circ}$ and west $270^{\circ}$. "The bearing of $B$ from $A$" is the direction you face at $A$ to look at $B$: draw a north line **at $A$** (the starting point named second in the phrase "from $A$") and measure clockwise to $AB$.

**Back bearings.** If the bearing of $B$ from $A$ is $\theta$, then the bearing of $A$ from $B$ is $\theta+180^{\circ}$ if $\theta<180^{\circ}$ and $\theta-180^{\circ}$ if $\theta\ge180^{\circ}$. This follows from parallel north lines and co-interior angles ($180^{\circ}$ in total). For example, if $B$ is on bearing $070^{\circ}$ from $A$, then $A$ is on bearing $250^{\circ}$ from $B$.

**Finding an angle inside a bearing triangle.** In a journey with two legs, the angle at the turning point between the path back and the path forward is found from the back bearing and the forward bearing. If the first leg has bearing $070^{\circ}$ and the second $150^{\circ}$, then at the turning point $Q$ the bearing of $P$ (back along the first leg) is $250^{\circ}$ and the bearing of the next leg is $150^{\circ}$, so the interior angle $PQR=250^{\circ}-150^{\circ}=100^{\circ}$. Draw this and check it using the picture: the angle should look obtuse when the route bends gently.

### Using triangles with bearings

Once you have a triangle with two sides and an included angle, use the cosine rule for the third side, and the sine rule for another angle (or the cosine rule again). To convert the angle in the triangle back to a bearing, **add or subtract it from a known bearing**, again drawing a north line at the relevant point. For the bearing of $R$ from $P$: angle $QPR$ is the extra turn clockwise from the first leg direction, so the bearing of $R$ from $P$ is $070^{\circ}+\angle QPR$ if $R$ lies clockwise from $Q$ as seen from $P$.

Alternatively, use **components**: a displacement $d$ on bearing $\theta$ has an eastward component $d\sin\theta$ and a northward component $d\cos\theta$ (note that, unlike the standard mathematical angle, the bearing is from north, so $\sin$ and $\cos$ swap roles). Adding components of the legs gives the total displacement, whose magnitude and bearing are found with Pythagoras and $\tan^{-1}$ (taking care with the quadrant). This method avoids having to find interior angles and is also a preview of vector addition (AHL 3.12).

### A vertical object seen from two positions

To find the height $h$ of a tower with base $B$ when you can measure only from the ground: from a point $A$ at a distance $x$ from $B$, the angle of elevation of the top is $\alpha$, so $h=x\tan\alpha$. If the base is inaccessible, observe from two points $A$ and $A'$ on the same line through $B$, a distance $d$ apart, with angles $\alpha$ (far) and $\beta$ (near), $\beta>\alpha$. Then $A B=\dfrac h{\tan\alpha}$, $A'B=\dfrac h{\tan\beta}$ and $d=\dfrac h{\tan\alpha}-\dfrac h{\tan\beta}$, so
$$
h=\frac{d}{\dfrac1{\tan\alpha}-\dfrac1{\tan\beta}}.
$$
If the two observation points and the base are not collinear, find $AB$ and $CB$ from the elevation angles, and then use the cosine rule in triangle $ABC$ with the known angle $ABC$ or distance $AC$, where $AB$ and $CB$ are the horizontal distances (not the lines of sight). Draw the *horizontal* triangle separately: it lies in the ground plane and the cosine rule applies there.

### Shortest distance from a point to a line

The shortest distance from a point $P$ to a line is the length of the **perpendicular** from $P$ to the line. In a triangle with the line as one side, if the angle between the line and the segment from a point $O$ on the line to $P$ is $\phi$ and $OP=d$, the shortest distance is $d\sin\phi$, and the foot of the perpendicular is at a distance $d\cos\phi$ along the line from $O$. This is the question of closest approach: a boat sailing on a straight course passes a lighthouse at distance $d\sin\phi$. Note that the closest point must be on the actual path; if $\phi>90^{\circ}$ and the path is only a half-line, the closest point is the start.

### Gradient, slope and angle of inclination

A slope that rises $v$ for a horizontal run $h$ has **gradient** $\dfrac vh$ (often given as a percentage $100\dfrac vh\%$) and **angle of inclination** $\theta=\tan^{-1}\dfrac vh$. A $15\%$ gradient has an angle of about $8.5^{\circ}$, since $\tan^{-1}0.15=8.53^{\circ}$. The length along the slope is $\sqrt{v^{2}+h^{2}}$, and $\sin\theta=\dfrac v{\text{slope length}}$. For a ladder of length $L$ leaning at an angle $\theta$ to the ground, the height reached is $L\sin\theta$ and the distance of the base from the wall is $L\cos\theta$.

### Multi-step problems

In a problem with two or more triangles, make a **plan**: list what is known in each triangle and in which order the unknowns can be found. A typical sequence is (1) a right triangle to find a horizontal distance; (2) the cosine rule in a ground triangle to find another distance; (3) another right triangle to find an angle of elevation. Pass **unrounded** values from step to step (store them in the calculator), and round only the final answer.

### Three-dimensional problems

The recipe from SL 3.1 applies: identify a vertical plane or a horizontal plane that contains the required lengths, draw it as a flat triangle, mark the right angles, and compute. Three-dimensional trigonometry questions are often mixtures of a vertical right triangle (height and horizontal distance) and a horizontal triangle on the ground (cosine rule). Mark the points consistently in both drawings.

### Accuracy and assumptions

Give lengths to $3$ significant figures and angles to the nearest tenth of a degree (or as asked), and include units. When measurements are approximate, say so: a real height found from an elevation angle that was measured to the nearest degree is uncertain by about $2\%$ at $35^{\circ}$. Mention the modelling assumptions (flat Earth, vertical tower, straight path).

## Worked examples

### Example 1 (elevation, 4 marks)

A surveyor stands $40$ m from the base of a building on level ground. The angle of elevation of the top is $35^{\circ}$. Find the height of the building, given that her eyes are $1.6$ m above the ground.

*Solution.* The height above eye level is $40\tan35^{\circ}\approx28.0$ m. So the building is $28.0+1.6\approx29.6$ m high.

### Example 2 (depression, 4 marks)

From the top of a cliff $60$ m high, the angle of depression of a boat is $12^{\circ}$. How far is the boat from the foot of the cliff?

*Solution.* The angle of depression equals the angle of elevation of the cliff top from the boat, $12^{\circ}$. So $\tan12^{\circ}=\dfrac{60}{x}$ and $x=\dfrac{60}{\tan12^{\circ}}\approx282$ m.

### Example 3 (a tower from two points, 7 marks)

From a point $A$ on level ground, the angle of elevation of the top of a tower is $25^{\circ}$. After walking $50$ m directly towards the tower to $A'$, the angle of elevation is $40^{\circ}$. Find the height of the tower.

*Solution.* Let the height be $h$ and the base be $B$. $AB=\dfrac h{\tan25^{\circ}}$ and $A'B=\dfrac h{\tan40^{\circ}}$. Then $AB-A'B=50$ gives $h\left(\dfrac1{\tan25^{\circ}}-\dfrac1{\tan40^{\circ}}\right)=50$, i.e. $h(2.1445-1.1918)=50$ and $h\approx52.5$ m.

Check: $A'B=\dfrac{52.48}{\tan40^{\circ}}\approx62.5$ m and $AB\approx112.5$ m, so $AB-A'B=50$ ✓.

### Example 4 (a two-leg journey with bearings, 9 marks)

A ship leaves port $P$ and sails $12$ km on a bearing of $070^{\circ}$ to $Q$. It then sails $9$ km on a bearing of $150^{\circ}$ to $R$. Find (a) the distance $PR$; (b) the bearing of $R$ from $P$; (c) the bearing of $P$ from $R$.

*Solution.* At $Q$ the bearing of $P$ is $250^{\circ}$ and the bearing of $R$ is $150^{\circ}$, so $\angle PQR=250^{\circ}-150^{\circ}=100^{\circ}$.

(a) $PR^{2}=12^{2}+9^{2}-2(12)(9)\cos100^{\circ}=225+37.51=262.5$, so $PR\approx16.2$ km.

(b) By the sine rule $\dfrac{\sin\angle QPR}{9}=\dfrac{\sin100^{\circ}}{16.20}$, so $\sin\angle QPR=0.5471$ and $\angle QPR\approx33.2^{\circ}$ (acute, since it is opposite the shorter side $QR<PR$). The path from $P$ to $R$ turns clockwise from the bearing $070^{\circ}$ by $33.2^{\circ}$, so the bearing of $R$ from $P$ is $070^{\circ}+33.2^{\circ}\approx103^{\circ}$.

(c) The back bearing is $103.2^{\circ}+180^{\circ}=283^{\circ}$.

Check with components: east $=12\sin70^{\circ}+9\sin150^{\circ}=11.28+4.5=15.78$, north $=12\cos70^{\circ}+9\cos150^{\circ}=4.10-7.79=-3.69$. Distance $=\sqrt{15.78^{2}+3.69^{2}}=16.2$ ✓ and the bearing is $90^{\circ}+\tan^{-1}\dfrac{3.69}{15.78}=103.2^{\circ}$ ✓.

### Example 5 (area and a missing side, 6 marks)

A triangular plot has two sides of $120$ m and $150$ m enclosing an angle of $65^{\circ}$. Find the area of the plot and the length of fencing needed for the third side.

*Solution.* Area $=\dfrac12(120)(150)\sin65^{\circ}\approx8160\ \text{m}^{2}$. The third side $c^{2}=120^{2}+150^{2}-2(120)(150)\cos65^{\circ}=36\,900-15\,214=21\,686$, so $c\approx147$ m.

### Example 6 (a ladder, 4 marks)

A ladder of length $5$ m leans against a vertical wall and makes an angle of $70^{\circ}$ with the horizontal ground. Find how high it reaches and how far its base is from the wall. For safety the ladder must reach a height of $4.5$ m; find the angle then.

*Solution.* Height $=5\sin70^{\circ}\approx4.70$ m; base distance $=5\cos70^{\circ}\approx1.71$ m. For a height of $4.5$ m: $\sin\theta=\dfrac{4.5}5=0.9$, so $\theta\approx64.2^{\circ}$.

### Example 7 (a ramp, 4 marks)

A ramp rises $1.2$ m over a horizontal distance of $8$ m. Find the gradient as a percentage and the angle of inclination.

*Solution.* The gradient is $\dfrac{1.2}8=0.15=15\%$. The angle is $\tan^{-1}0.15\approx8.53^{\circ}$.

### Example 8 (a flagpole on a building, 5 marks)

From a point $30$ m from the base of a building, the angles of elevation of the bottom and the top of a flagpole standing on the roof are $38^{\circ}$ and $45^{\circ}$. Find the length of the flagpole.

*Solution.* The height to the bottom of the flagpole is $30\tan38^{\circ}=23.44$ m and to the top is $30\tan45^{\circ}=30$ m. The flagpole is $30-23.44\approx6.56$ m long.

### Example 9 (the horizontal triangle, 9 marks)

A vertical tower has height $45$ m. From a point $A$ on level ground the angle of elevation of the top is $28^{\circ}$, and from a point $C$ on level ground the angle is $35^{\circ}$. The angle $ABC$ at the base $B$ of the tower is $110^{\circ}$. Find the distance $AC$.

*Solution.* The horizontal distances are $AB=\dfrac{45}{\tan28^{\circ}}\approx84.63$ m and $CB=\dfrac{45}{\tan35^{\circ}}\approx64.27$ m. In the ground triangle $ABC$, by the cosine rule $AC^{2}=84.63^{2}+64.27^{2}-2(84.63)(64.27)\cos110^{\circ}=7162.6+4130.2+3720.5=15\,013$, so $AC\approx123$ m.

### Example 10 (closest approach, 6 marks)

A boat leaves a port $P$ and sails along a straight course on a bearing of $040^{\circ}$. A lighthouse $L$ is $8$ km from $P$ on a bearing of $100^{\circ}$. Find the shortest distance between the boat's course and the lighthouse, and how far along the course from $P$ the boat is at that moment.

*Solution.* The angle between the course and the direction to the lighthouse is $100^{\circ}-40^{\circ}=60^{\circ}$. The shortest distance is the perpendicular distance $8\sin60^{\circ}\approx6.93$ km. The point of closest approach is at $8\cos60^{\circ}=4$ km from $P$ along the course.

### Example 11 (components, 7 marks)

Ship $B$ is $20$ km from $A$ on a bearing of $060^{\circ}$. Ship $C$ is $15$ km from $A$ on a bearing of $150^{\circ}$. Find $BC$ and the bearing of $C$ from $B$.

*Solution.* The angle $BAC=150^{\circ}-60^{\circ}=90^{\circ}$, so $BC=\sqrt{20^{2}+15^{2}}=25$ km. With $A$ as origin, $B=(20\sin60^{\circ},20\cos60^{\circ})=(17.32,10)$ and $C=(15\sin150^{\circ},15\cos150^{\circ})=(7.5,-12.99)$. The vector $\overrightarrow{BC}=(-9.82,-22.99)$ points south and a little west. Its bearing is $180^{\circ}+\tan^{-1}\dfrac{9.82}{22.99}=180^{\circ}+23.1^{\circ}\approx203^{\circ}$.

### Example 12 (a back bearing, 3 marks)

The bearing of $B$ from $A$ is $130^{\circ}$. Find the bearing of $A$ from $B$.

*Solution.* $130^{\circ}+180^{\circ}=310^{\circ}$.

## Using your GDC

Always set the GDC to **degrees** for bearings and elevation problems. To avoid repeated rounding, store each intermediate length in a variable (for instance $A$, $B$, $C$) and recall it in the next step. Evaluate expressions such as $\dfrac h{\tan\alpha}$ with brackets: $h/\tan(\alpha)$. For a tower from two points, you may prefer to type $50/(1/\tan(25)-1/\tan(40))$ in one go. If the question is about a bearing, use the *polar to rectangular* conversion (a routine in many GDCs) to find the components of a displacement from its length and angle, but remember that a bearing is measured from north, so the conventional angle is $90^{\circ}-\text{bearing}$. For equations that involve an unknown angle inside a trigonometric function, the *solver* or a graph intersection helps. Menu names vary by model. The calculation is the easy part; check your diagram carefully before keying anything in.

## Common mistakes

1. **Angle of depression drawn from the vertical**, or measured at the wrong end: it is below the *horizontal* through the observer.
2. **Bearings measured anticlockwise or from east**, or written with fewer than three figures.
3. **The north line drawn at the wrong point**: the bearing of $B$ from $A$ uses the north line at $A$.
4. **Using the line-of-sight distances instead of horizontal distances** in a ground triangle.
5. **Forgetting the observer's height** when the question gives it, or adding it when told to ignore it.
6. **Mistakes in interior angles**: using the bearing difference directly instead of the supplement or the back bearing.
7. **Not storing unrounded values**, so the final answer is off in the third significant figure.
8. **Skipping the diagram**: a correct sketch is worth a mark itself and prevents most other errors.

## Exam technique and command terms

**Find the bearing** means a three-figure bearing in degrees. **Calculate** requires numerical working. **Show that** asks for a derivation, and a careful diagram helps. **Sketch a diagram** in the question is a marked item. For long problems, label points in the order given, mark known sides and angles, mark the right angles and use a different colour for derived angles. State which rule you apply: "by the cosine rule in triangle $PQR$". At each step, write the formula with substituted values before the answer.

Check the answer for reasonableness: a ship that sails $12$ km and then $9$ km cannot be more than $21$ km from the start. For a three-dimensional problem, write down *which plane* each triangle lies in. If the question asks for the angle of elevation at the end, make sure the final angle is the one required rather than its complement. For multi-part problems, use your own answer from an earlier part if you are unable to complete it, since *follow through* marks are awarded for correct method.

## Connections

SL 3.1 and SL 3.2 provide the three-dimensional figures and the sine and cosine rules that are used here, and SL 2.1 provides gradients as $\tan\theta$. SL 3.4 and SL 3.5 will generalise angles beyond $90^{\circ}$ and show why $\sin(180^{\circ}-\theta)=\sin\theta$, which explains the ambiguous case. AHL 3.12 formalises displacements as vectors with components, which is the "components" method of Example 11, and AHL 3.13 gives the angle between two directions via the scalar product. AHL 3.14 and 3.15 give vector equations of paths and the closest approach of two moving objects, and AHL 3.16 gives areas of triangles with the vector product. In Unit 5, related-rates problems use exactly these diagrams (a ladder sliding down a wall, an angle of elevation changing with time), and optimisation problems minimise a distance such as the closest approach. In Unit 4, nothing is directly trigonometric, though the two-dimensional spread of a bivariate data set can be described by angles of regression lines.

## Check your understanding

1. A pole is seen from a point $50$ m from its base on level ground at an angle of elevation of $32^{\circ}$. Find the height of the pole.
2. From a cliff top $80$ m above the sea, the angle of depression of a boat is $18^{\circ}$. Find its distance from the foot of the cliff.
3. From a point $A$ the angle of elevation of the top of a tower is $20^{\circ}$. After walking $30$ m towards it, the angle is $35^{\circ}$. Find the height of the tower.
4. A ship sails $10$ km on a bearing of $060^{\circ}$ and then $7$ km on a bearing of $170^{\circ}$. Find its distance from the start and the bearing of the end point from the start.
5. A triangular plot has sides of $80$ m and $95$ m enclosing an angle of $72^{\circ}$. Find its area and the length of the third side.
6. A ramp rises $0.9$ m over a horizontal distance of $6$ m. Find its gradient as a percentage and its angle of inclination.
7. A ladder of length $6$ m makes an angle of $75^{\circ}$ with the ground. Find how high it reaches and the distance of its base from the wall.
8. A tower is $50$ m high. From a point $A$ the angle of elevation of its top is $30^{\circ}$ and from a point $C$ it is $40^{\circ}$. Angle $ABC$ at the base of the tower is $120^{\circ}$. Find $AC$.
9. A boat sails along a straight course on a bearing of $040^{\circ}$ from a port $P$. A lighthouse is $12$ km from $P$ on a bearing of $100^{\circ}$. Find the shortest distance of the course from the lighthouse and the distance along the course from $P$ at which this occurs.
10. The bearing of $A$ from $B$ is $235^{\circ}$. Find the bearing of $B$ from $A$.

### Answers

1. $50\tan32^{\circ}\approx31.2$ m.
2. $\dfrac{80}{\tan18^{\circ}}\approx246$ m.
3. $h\left(\dfrac1{\tan20^{\circ}}-\dfrac1{\tan35^{\circ}}\right)=30$, so $h=\dfrac{30}{2.7475-1.4281}\approx22.7$ m.
4. At the turning point $Q$, the bearing of the start is $240^{\circ}$ and the next bearing is $170^{\circ}$, so the interior angle is $70^{\circ}$. $PR^{2}=100+49-140\cos70^{\circ}=101.1$, so $PR\approx10.1$ km. The sine rule gives $\sin\angle QPR=\dfrac{7\sin70^{\circ}}{10.06}=0.654$, so $\angle QPR\approx40.9^{\circ}$ and the bearing is $060^{\circ}+40.9^{\circ}\approx101^{\circ}$.
5. Area $=\dfrac12(80)(95)\sin72^{\circ}\approx3610\ \text{m}^{2}$. The third side is $\sqrt{6400+9025-15\,200\cos72^{\circ}}\approx104$ m.
6. The gradient is $\dfrac{0.9}6=15\%$ and the angle is $\tan^{-1}0.15\approx8.53^{\circ}$.
7. Height $=6\sin75^{\circ}\approx5.80$ m and base distance $=6\cos75^{\circ}\approx1.55$ m.
8. $AB=\dfrac{50}{\tan30^{\circ}}=86.60$ m and $CB=\dfrac{50}{\tan40^{\circ}}=59.59$ m. $AC^{2}=86.60^{2}+59.59^{2}-2(86.60)(59.59)\cos120^{\circ}=7500+3551+5160=16\,211$, so $AC\approx127$ m.
9. The angle between the course and the lighthouse direction is $60^{\circ}$. The shortest distance is $12\sin60^{\circ}\approx10.4$ km, at $12\cos60^{\circ}=6$ km from $P$.
10. $235^{\circ}-180^{\circ}=055^{\circ}$.

## Summary

- Elevation and depression are measured from the horizontal; the angle of depression from the top equals the angle of elevation from the bottom.
- Bearings are three-figure and clockwise from north, with the north line drawn at the starting point named; the back bearing differs by $180^{\circ}$.
- In a two-leg journey, the interior angle at the turn comes from the back bearing and the forward bearing; then use the cosine and sine rules, or components $d\sin\theta$ (east) and $d\cos\theta$ (north).
- Tower from two points: $h=\dfrac d{\frac1{\tan\alpha}-\frac1{\tan\beta}}$; for non-collinear points use horizontal distances and the cosine rule in the ground triangle.
- Shortest distance to a line is $d\sin\phi$ (perpendicular); gradient is $\frac vh$ and the angle of inclination is $\tan^{-1}\frac vh$.
- Draw, plan, store unrounded values, round last, and give units.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0 has no dedicated printed row for SL 3.3. Related facts may appear elsewhere. Justify any method used here.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
