# Three-dimensional geometry

> **SL 3.1 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- find the distance between two points and the midpoint of a segment in three-dimensional Cartesian coordinates;
- calculate volumes and surface areas of cuboids, right prisms and cylinders, right pyramids, right cones, spheres, hemispheres and composite solids;
- identify right-angled triangles inside a solid, and use Pythagoras' theorem and trigonometry in them;
- find the angle between two intersecting lines, and between a line and a plane;
- find the angle between a face and the base of a solid;
- apply the sine rule, cosine rule and area formula in a triangle drawn inside a solid;
- model a real object as a solid, state assumptions and interpret the answers with units.

## Why this topic matters

The world is three-dimensional, and so every engineering, architectural and design problem eventually asks for a volume, a surface area, a length that cuts through space, or an angle between two surfaces. How much paint covers a conical roof? How long is the longest pole that fits inside a room? At what angle does a rafter meet the horizontal? The mathematics is not difficult, but the examination rewards one particular skill: seeing the **right-angled triangles hidden inside a three-dimensional diagram**, and drawing them separately in two dimensions. Candidates who learn to extract the triangle and label its sides correctly rarely lose marks on these questions, while those who try to work from the three-dimensional picture often use the wrong lengths. This chapter provides the formulas (which are in the formula booklet and which you should know how to use) and the method for extracting the plane triangle, and it connects to the trigonometry of SL 3.2 and SL 3.3, the sectors and arcs of SL 3.4, and the vectors of AHL 3.12 to 3.18, which describe lines and planes in space.

## Core ideas

### Coordinates in three dimensions

A point in space is given by three coordinates $(x,y,z)$, measured along three mutually perpendicular axes. The distance between $A(x_1,y_1,z_1)$ and $B(x_2,y_2,z_2)$ is
$$
AB=\sqrt{(x_2-x_1)^{2}+(y_2-y_1)^{2}+(z_2-z_1)^{2}},
$$
which is Pythagoras' theorem applied twice: once in the horizontal plane to get the horizontal distance, then again with the vertical difference. The midpoint of $AB$ is
$$
M=\left(\frac{x_1+x_2}2,\ \frac{y_1+y_2}2,\ \frac{z_1+z_2}2\right).
$$
Given the midpoint and one end point, the other end point is found by doubling: $B=2M-A$.

### The longest line in a cuboid

For a cuboid with edges $a$, $b$, $c$, the face diagonal on the $a\times b$ face has length $\sqrt{a^{2}+b^{2}}$, and the **space diagonal** (from one vertex to the opposite vertex) has length
$$
d=\sqrt{a^{2}+b^{2}+c^{2}}.
$$
The longest straight rod that fits in a room of dimensions $a\times b\times c$ is the space diagonal.

### Volume and surface area: the formulas

The IB formula booklet gives, for the main solids:

| Solid | Volume | Surface area |
|---|---|---|
| Prism or cylinder | $V=Ah$ (area of cross-section times height); cylinder $V=\pi r^{2}h$ | cylinder curved part $2\pi rh$ |
| Pyramid | $V=\dfrac13Ah$ | sum of base and triangular faces |
| Cone | $V=\dfrac13\pi r^{2}h$ | curved part $\pi rl$, where $l$ is the slant height |
| Sphere | $V=\dfrac43\pi r^{3}$ | $A=4\pi r^{2}$ |

In the cone, $l=\sqrt{r^{2}+h^{2}}$ (Pythagoras). Always check which parts of the surface the question asks for: "total surface area" of a closed cone is $\pi r^{2}+\pi rl$ (base plus curved part). For a hemisphere, the curved surface is $2\pi r^{2}$, and the total surface including the flat circular face is $3\pi r^{2}$; its volume is $\dfrac23\pi r^{3}$.

For a right pyramid with a square base of side $s$ and perpendicular height $h$, the **slant height** of a triangular face (from the midpoint of a base edge to the apex) is $\sqrt{h^{2}+\left(\dfrac s2\right)^{2}}$ and the **lateral edge** (from a base vertex to the apex) is $\sqrt{h^{2}+\left(\dfrac{s\sqrt2}2\right)^{2}}$, since the horizontal distance from the foot of the height to a vertex is half the base diagonal. These two lengths are different, and confusing them is a classic error: the slant height gives face area, the lateral edge gives the angle at the vertex.

### Composite solids

Many problems combine solids: a cylinder topped with a hemisphere (a capsule), an ice-cream cone, a pyramid on a cuboid. For the **volume**, add or subtract the volumes. For the **surface area**, include only the parts of the surface that are exposed: where two solids are joined, the contact faces are hidden and must not be counted. A sketch with labelled dimensions helps you to list every exposed surface exactly once.

### Similar solids and frusta

If two solids are geometrically similar with linear scale factor $k$, then lengths scale by $k$, areas by $k^{2}$ and volumes by $k^{3}$. A **frustum** of a cone (a cone with its top cut off by a parallel plane) has volume equal to the volume of the whole cone minus the volume of the small cone removed, and the small cone is similar to the big one. The ratio of the heights equals the ratio of the radii.

### Angles in solids

The key idea is to reduce the angle to a *plane* angle in a *right-angled triangle*, or in any triangle where the cosine rule can be used.

- **The angle between two intersecting lines** is the angle at the point of intersection between their direction. In a solid, find the triangle formed by the two lines and a third line joining their other ends, and apply the cosine rule: $\cos\theta=\dfrac{a^{2}+b^{2}-c^{2}}{2ab}$ where $a$ and $b$ are the two lines from the common point and $c$ is the opposite side.
- **The angle between a line and a plane** is the angle between the line and its **orthogonal projection** onto the plane. Drop a perpendicular from a point on the line to the plane; the foot is on the projection. The triangle formed by the line, the perpendicular and the projection is right-angled, with the angle at the plane being the required angle: $\sin\theta=\dfrac{\text{perpendicular height}}{\text{length of line}}$.
- **The angle between two planes** (such as a sloping face and the base) is measured along a line in each plane perpendicular to the line of intersection of the planes. For a pyramid, use the slant height and the height: the angle between the face and the base satisfies $\tan\theta=\dfrac{h}{s/2}$ for a square base of side $s$.

Draw the triangle you are using separately, label the known lengths, and identify the right angle. This is the technique that decides most 3D marks.

### Area of a triangle and the rules

In a non-right triangle inside a solid you may use the sine rule $\dfrac a{\sin A}=\dfrac b{\sin B}$, the cosine rule $c^{2}=a^{2}+b^{2}-2ab\cos C$ and the area formula $\dfrac12ab\sin C$ (SL 3.2). These are developed in the next two chapters; here, they are used as tools inside 3D figures.

### Modelling

When a real object is modelled as a solid, state the assumptions (for instance: "the tank is a perfect cylinder", "the roof is a right pyramid") and give units: lengths in cm or m, areas in cm² or m², volumes in cm³ or m³ (with $1\ \text{litre}=1000\ \text{cm}^{3}$). Be careful with unit conversions of areas and volumes: $1\ \text{m}^{3}=10^{6}\ \text{cm}^{3}$.

## Worked examples

### Example 1 (distance and midpoint, 4 marks)

Find the distance between $A(1,2,3)$ and $B(4,-2,15)$, and the midpoint of $AB$.

*Solution.* $AB=\sqrt{3^{2}+(-4)^{2}+12^{2}}=\sqrt{9+16+144}=\sqrt{169}=13$. The midpoint is $\left(\dfrac{1+4}2,\dfrac{2-2}2,\dfrac{3+15}2\right)=(2.5,\,0,\,9)$.

### Example 2 (the space diagonal and its angle with the base, 6 marks)

A cuboid has base $6\ \text{cm}\times8\ \text{cm}$ and height $10$ cm. Find (a) the space diagonal and (b) the angle it makes with the base.

*Solution.* (a) $d=\sqrt{36+64+100}=\sqrt{200}\approx14.1$ cm. (b) The diagonal of the base is $\sqrt{36+64}=10$ cm. The space diagonal, its projection (the base diagonal) and the vertical edge form a right-angled triangle with opposite side $10$ and adjacent side $10$. So $\tan\theta=\dfrac{10}{10}=1$ and $\theta=45^{\circ}$.

### Example 3 (a right pyramid, 9 marks)

A right pyramid has a square base of side $8$ cm and height $10$ cm. Find (a) the volume; (b) the slant height of a triangular face and the total surface area; (c) the angle between a lateral edge and the base; (d) the angle between a triangular face and the base.

*Solution.* (a) $V=\dfrac13(64)(10)=213.3\ \text{cm}^{3}$.

(b) The slant height is $\sqrt{10^{2}+4^{2}}=\sqrt{116}\approx10.77$ cm. Each face has area $\dfrac12(8)(10.77)=43.08$ cm², so the four faces total $172.3$ cm², and the total surface area is $64+172.3=236.3$ cm².

(c) The half-diagonal of the base is $4\sqrt2\approx5.657$ cm. Then $\tan\theta=\dfrac{10}{5.657}$ gives $\theta\approx60.5^{\circ}$. (The lateral edge has length $\sqrt{100+32}=\sqrt{132}\approx11.49$ cm.)

(d) The angle between the face and the base is at the midpoint of a base edge, with horizontal distance $4$ cm. $\tan\theta=\dfrac{10}{4}$, so $\theta\approx68.2^{\circ}$.

### Example 4 (a cone, 5 marks)

A cone has radius $5$ cm and perpendicular height $12$ cm. Find its slant height, volume, curved surface area and total surface area.

*Solution.* $l=\sqrt{25+144}=13$ cm. $V=\dfrac13\pi(25)(12)=100\pi\approx314.2\ \text{cm}^{3}$. Curved surface area $=\pi rl=65\pi\approx204.2\ \text{cm}^{2}$. Total surface area $=65\pi+25\pi=90\pi\approx282.7\ \text{cm}^{2}$.

### Example 5 (sphere and hemisphere, 4 marks)

A sphere has radius $6$ cm. Find its volume and surface area, and the volume and total surface area of the solid hemisphere of the same radius.

*Solution.* Sphere: $V=\dfrac43\pi(216)=288\pi\approx904.8\ \text{cm}^{3}$ and $A=4\pi(36)=144\pi\approx452.4\ \text{cm}^{2}$. Hemisphere: $V=144\pi\approx452.4\ \text{cm}^{3}$ and total surface area $2\pi r^{2}+\pi r^{2}=3\pi(36)=108\pi\approx339.3\ \text{cm}^{2}$.

### Example 6 (a composite solid, 7 marks)

A solid consists of a cylinder of radius $3$ cm and height $8$ cm, with a hemisphere of radius $3$ cm on top. Find its volume and total surface area.

*Solution.* Volume: cylinder $\pi(9)(8)=72\pi$, hemisphere $\dfrac23\pi(27)=18\pi$. Total $90\pi\approx282.7\ \text{cm}^{3}$. Surface area: the exposed surfaces are the base of the cylinder $\pi(9)=9\pi$, the curved side of the cylinder $2\pi(3)(8)=48\pi$ and the curved part of the hemisphere $2\pi(9)=18\pi$. The circle where the two join is hidden. Total $75\pi\approx235.6\ \text{cm}^{2}$.

### Example 7 (a frustum, 6 marks)

A cone of height $12$ cm and base radius $6$ cm has its top removed by a cut parallel to the base, leaving a smaller cone of height $4$ cm. Find the volume of the remaining frustum.

*Solution.* The small cone is similar to the original with scale factor $\dfrac4{12}=\dfrac13$, so its radius is $2$ cm. Volume of the original cone: $\dfrac13\pi(36)(12)=144\pi$. Volume of the small cone: $\dfrac13\pi(4)(4)=\dfrac{16\pi}3$. The frustum has volume $144\pi-\dfrac{16\pi}3=\dfrac{416\pi}3\approx435.6\ \text{cm}^{3}$.

Check using the cube law: the small cone has volume $\left(\dfrac13\right)^{3}\times144\pi=\dfrac{144\pi}{27}=\dfrac{16\pi}3$ ✓.

### Example 8 (the angle between two lines in a cube, 6 marks)

A cube has side $4$ cm. From the vertex $O$, a face diagonal $OP$ and the space diagonal $OQ$ are drawn, with $P$ and $Q$ directly above one another. Find angle $POQ$.

*Solution.* Place $O(0,0,0)$, $P(4,4,0)$ and $Q(4,4,4)$. Then $OP=\sqrt{32}$, $OQ=\sqrt{48}$ and $PQ=4$. By the cosine rule $\cos\angle POQ=\dfrac{32+48-16}{2\sqrt{32}\sqrt{48}}=\dfrac{64}{78.38}=0.8165$, so $\angle POQ\approx35.3^{\circ}$. Alternatively, triangle $OPQ$ is right-angled at $P$ (since $PQ$ is vertical), with $\tan\angle POQ=\dfrac{PQ}{OP}=\dfrac4{\sqrt{32}}=\dfrac1{\sqrt2}$, which gives the same angle.

### Example 9 (a pyramidal roof, 5 marks)

A roof is a right pyramid with a square base of side $12$ m and height $5$ m. Find the area of the roof and the volume of the roof space.

*Solution.* The slant height is $\sqrt{5^{2}+6^{2}}=\sqrt{61}\approx7.81$ m. The area of the four triangular faces is $4\times\dfrac12(12)(7.81)=187.4\ \text{m}^{2}$. The volume is $\dfrac13(144)(5)=240\ \text{m}^{3}$.

### Example 10 (longest rod, 3 marks)

What is the longest straight pole that can be placed inside a room $5\ \text{m}\times4\ \text{m}\times3\ \text{m}$?

*Solution.* The space diagonal is $\sqrt{25+16+9}=\sqrt{50}\approx7.07$ m.

### Example 11 (finding an end point, 3 marks)

The midpoint of $AB$ is $M(2,1,3)$ and $A=(-1,4,0)$. Find $B$.

*Solution.* $B=2M-A=(4+1,\,2-4,\,6-0)=(5,-2,6)$.

Check the midpoint: $\left(\dfrac{-1+5}2,\dfrac{4-2}2,\dfrac{0+6}2\right)=(2,1,3)$ ✓.

### Example 12 (an angle with a plane through coordinates, 7 marks)

A pole $AB$ has $A(0,0,0)$ on the horizontal ground (the $xy$-plane) and $B(3,4,12)$. Find the length of the pole and the angle it makes with the ground.

*Solution.* $AB=\sqrt{9+16+144}=13$. The foot of the perpendicular from $B$ to the ground is $(3,4,0)$, at distance $5$ from $A$, and the height is $12$. So $\sin\theta=\dfrac{12}{13}$, giving $\theta\approx67.4^{\circ}$ (equivalently $\tan\theta=\dfrac{12}5$).

## Using your GDC

The GDC saves time in three dimensional problems when you have the right triangle: use it for inverse trigonometric functions ($\tan^{-1}$, $\sin^{-1}$, $\cos^{-1}$) in degree mode, and for the cosine rule with large numbers. Store intermediate results (slant height, diagonal) in memory to avoid rounding errors. For composite solids, enter the volume as a single expression with brackets, and use the $\pi$ key rather than $3.14$. Some GDCs have a geometry or vector application which can compute distances and angles between points given as coordinates, but you should still show the formula in your working. The table or a spreadsheet can be used to find the dimensions of a solid that satisfy a volume or area condition, for example the radius that makes the total surface area equal to a given value, using the *solve* or *intersect* tool on a graph of the area as a function of $r$. Menu names vary by model. Always check the angle mode before calculating an angle.

## Common mistakes

1. **Using the slant edge or the slant height wrongly** in a pyramid: the horizontal distance from the foot of the height to a base vertex is half the base *diagonal*, and to a base edge midpoint is half the base *side*.
2. **Using the wrong triangle**, such as mixing the height with the full length of the base side.
3. **Forgetting the base** in a total surface area, or counting the joined face of a composite solid.
4. **Using $r$ instead of the slant height $l$** in $\pi rl$, or using the slant height in the volume.
5. **Forgetting that volumes scale by $k^{3}$** and areas by $k^{2}$ for similar solids.
6. **Unit conversion errors**: converting $\text{m}^{2}$ to $\text{cm}^{2}$ by $100$ instead of $10\,000$, or $\text{cm}^{3}$ to litres by dividing by $100$ instead of $1000$.
7. **Rounding too early** when the angle comes from a chain of calculations.
8. **Calculator in radian mode** while answering in degrees.

## Exam technique and command terms

**Find the angle between** the line and the plane means the angle with its projection. **Calculate** requires a numerical answer with working. **Show that** requires exact working to reach the printed answer. A strong answer to a 3D question has these parts: (1) a sketch of the solid with the relevant points labelled; (2) a clearly drawn two-dimensional triangle with known sides marked and the right angle indicated; (3) the formula (Pythagoras, trigonometric ratio, cosine rule) written with substituted values; (4) the answer to $3$ significant figures with units (degrees for angles). Mark the right angle on your diagram, because this shows the examiner that you identified the relevant geometry.

If the dimensions are given as coordinates, you can compute with vectors (AHL) or with distances (SL). If the question gives you a plane such as a roof and asks for an angle, think of the perpendicular height and the projection first. When an answer to an earlier part is used, use the unrounded value in the next step, and quote answers to $3$ significant figures at the end.

## Connections

SL 2.1 gave the distance and midpoint formulas in two dimensions, which this chapter extends to three. SL 3.2 and SL 3.3 develop the sine and cosine rules and the use of right-angled trigonometry that are applied inside solids. SL 3.4 provides arcs and sectors, which connect to cones through the net of the curved surface (a sector whose arc length is the circumference of the base). SL 1.1 to 1.2 provide the standard form and sequences used with large volumes. In AHL 3.12 to 3.18, vectors describe the same geometry: the distance is the magnitude of a vector, the angle between two lines is found with the scalar product (AHL 3.13), the equation of a line is a vector equation (AHL 3.14) and planes are described by equations (AHL 3.17). The angle between a line and a plane and between two planes become short vector calculations. In Unit 5, the volume of a solid of revolution is an integral that generalises the cone and sphere formulas derived here, and related-rates problems use these formulas with a changing radius or height. In Unit 4, nothing is directly three-dimensional, but sampling in a region uses area and volume as proportions.

## Check your understanding

1. Find the distance between $P(2,-1,4)$ and $Q(-2,3,6)$ and the midpoint of $PQ$.
2. A cuboid is $3\ \text{cm}\times4\ \text{cm}\times12\ \text{cm}$. Find the space diagonal, and the angle it makes with the $3\times4$ base.
3. A right square pyramid has base side $6$ cm and height $4$ cm. Find its volume, total surface area and the angle between a triangular face and the base.
4. For the pyramid in question 3, find the length of a lateral edge and the angle it makes with the base.
5. A cone has radius $3$ cm and height $4$ cm. Find the volume and curved surface area.
6. A sphere has diameter $10$ cm. Find its volume and surface area.
7. A solid consists of a cone of radius $4$ cm and height $9$ cm with a hemisphere of radius $4$ cm attached to its base. Find the volume and the total surface area.
8. The midpoint of $AB$ is $M(3,-1,2)$ and $A=(1,2,-3)$. Find $B$.
9. A room is $8\ \text{m}\times6\ \text{m}\times5\ \text{m}$. Find the longest straight pole that fits inside.
10. A cone of height $15$ cm and radius $9$ cm has a small cone of height $5$ cm cut from its top by a plane parallel to the base. Find the volume of the frustum.

### Answers

1. $PQ=\sqrt{16+16+4}=6$ and the midpoint is $(0,1,5)$.
2. $d=\sqrt{9+16+144}=13$ cm. The base diagonal is $5$ cm, so $\tan\theta=\dfrac{12}5$ and $\theta\approx67.4^{\circ}$.
3. $V=\dfrac13(36)(4)=48\ \text{cm}^{3}$. The slant height is $\sqrt{16+9}=5$ cm, so the lateral area is $4\times\dfrac12(6)(5)=60$ and the total surface area is $96\ \text{cm}^{2}$. The face angle satisfies $\tan\theta=\dfrac43$, so $\theta\approx53.1^{\circ}$.
4. Half the base diagonal is $3\sqrt2\approx4.243$ cm. The lateral edge is $\sqrt{16+18}=\sqrt{34}\approx5.83$ cm and the angle with the base has $\tan\theta=\dfrac{4}{4.243}$, so $\theta\approx43.3^{\circ}$.
5. $l=5$ cm. $V=\dfrac13\pi(9)(4)=12\pi\approx37.7\ \text{cm}^{3}$ and the curved surface area is $\pi(3)(5)=15\pi\approx47.1\ \text{cm}^{2}$.
6. $r=5$: $V=\dfrac43\pi(125)=\dfrac{500\pi}3\approx523.6\ \text{cm}^{3}$ and $A=4\pi(25)=100\pi\approx314.2\ \text{cm}^{2}$.
7. Cone volume $\dfrac13\pi(16)(9)=48\pi$ and hemisphere $\dfrac23\pi(64)=\dfrac{128\pi}3$; total $\dfrac{272\pi}3\approx284.8\ \text{cm}^{3}$. The slant height is $\sqrt{81+16}=\sqrt{97}\approx9.849$ cm. Exposed surface: cone curved part $\pi(4)(9.849)\approx123.8$ and hemisphere curved part $2\pi(16)\approx100.5$, total $\approx224.3\ \text{cm}^{2}$.
8. $B=2M-A=(6-1,\,-2-2,\,4+3)=(5,-4,7)$.
9. $\sqrt{64+36+25}=\sqrt{125}\approx11.2$ m.
10. The small cone has scale factor $\dfrac13$ and radius $3$ cm. The frustum volume is $\dfrac13\pi(81)(15)-\dfrac13\pi(9)(5)=405\pi-15\pi=390\pi\approx1225\ \text{cm}^{3}$.

## Summary

- Distance in $3$D: $\sqrt{\Delta x^{2}+\Delta y^{2}+\Delta z^{2}}$; midpoint: average of coordinates; the cuboid space diagonal is $\sqrt{a^{2}+b^{2}+c^{2}}$.
- Pyramid $V=\frac13Ah$; cone $V=\frac13\pi r^{2}h$, curved area $\pi rl$ with $l=\sqrt{r^{2}+h^{2}}$; sphere $V=\frac43\pi r^{3}$, $A=4\pi r^{2}$.
- Composite solids: add volumes; count only exposed surfaces.
- Similar solids: lengths $\times k$, areas $\times k^{2}$, volumes $\times k^{3}$; a frustum is a big cone minus a small cone.
- Angles in solids: draw the right-angled triangle separately. Line and plane: angle with the projection. Face and base: use the slant height and height.
- State units, use unrounded intermediate values and check degree mode.
