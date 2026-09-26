# Geometry and Trigonometry | Shape, angle and direction

> **AA SL foundations and AA HL extensions.** An original guide to the 18 code-specific lessons. Sketch first, choose a representation second, and calculate only after stating the interval, units or geometric object required.

## Connect the three languages

An angle can be measured in degrees or radians, but calculus and the compact arc formulas assume radians. A full revolution is $2\pi$ radians or $360^\circ$, so $\theta_{\mathrm{rad}}=\theta_{\mathrm{deg}}\pi/180$. The arc length of radius $r$ and central angle $\theta$ is $r\theta$, and the sector area is $r^2\theta/2$ when $\theta$ is in radians. For a sector with $r=6$ and $\theta=\pi/3$, the arc is $2\pi$ and the area is $6\pi$. Check units: the first is a length, the second an area. If the angle was supplied in degrees, convert it before using these forms.

Coordinates describe location; vectors describe displacement. In two dimensions, subtract endpoint coordinates to find $\vec{AB}$, then use the Pythagorean formula for its magnitude. In three dimensions, a vector $\mathbf a=(a_1,a_2,a_3)$ has magnitude $\sqrt{a_1^2+a_2^2+a_3^2}$, and the dot product $\mathbf a\cdot\mathbf b$ relates lengths and angle through $|\mathbf a||\mathbf b|\cos\theta$. A zero dot product establishes perpendicularity only when both vectors are nonzero. For a cross product, $|\mathbf a\times\mathbf b|$ gives the parallelogram area, and its direction is perpendicular to both vectors. The angle between **lines** is often reported as the acute angle, while oriented vectors can have an obtuse angle. State which interpretation is meant.

The learner's 2023 Version 1.0 AA HL booklet has now been checked: geometry and trigonometry rows run from printed pages 4 to 6 (PDF pages 6 to 8). These explanations are self-contained; check conditions and whether a particular result is direct or derived rather than assuming every identity is printed. See the formula booklet audit for exact rows.

## Worked SL example: solve on an interval

Solve $\sin(2x)=\sqrt3/2$ for $0\leq x<\pi$. The doubled angle runs over $0\leq2x<2\pi$, one full cycle. Within that interval sine reaches $\sqrt3/2$ at $2x=\pi/3$ and $2x=2\pi/3$. Dividing by $2$ gives $x=\pi/6$ and $x=\pi/3$. Both lie in the original interval. The values $x=7\pi/6$ and $4\pi/3$ would solve an extended periodic equation but lie outside the requested interval. If $x$ measured a physical angle in degrees, the corresponding valid answers here would be $30^\circ$ and $60^\circ$. Always convert the requested interval together with the answers.

For a bearing, draw the north line and measure clockwise. A direction $060^\circ$ points northeast, but its angle to the positive horizontal axis is $30^\circ$. Its east and north components for distance $d$ are $d\sin60^\circ$ and $d\cos60^\circ$ respectively. The placement of sine and cosine follows the north-referenced bearing sketch, not a memorized coordinate formula for an east-referenced angle.

## HL extension: vector geometry in space

Consider the line $\mathbf r=(1,0,2)+t(2,1,-1)$ and the plane $x+y+z=5$. Substitute the line into the plane: $(1+2t)+t+(2-t)=3+2t=5$, so $t=1$. The intersection point is $(3,1,1)$; its coordinates add to $5$. This is a geometric answer with a direct verification. The direction $(2,1,-1)$ has dot product $2$ with the plane normal $(1,1,1)$, so the line is not parallel to the plane. If that dot product were zero, substitution would either show no intersection or show that the entire line lies within the plane. Those two cases must be distinguished.

For another vector check, let $\mathbf a=(1,2,0)$ and $\mathbf b=(0,1,1)$. Their cross product is $(2,-1,1)$: dotting it with $\mathbf a$ gives $2-2=0$, and with $\mathbf b$ gives $-1+1=0$. The parallelogram area is $\sqrt{2^2+(-1)^2+1^2}=\sqrt6$. The triangle formed by the two vectors has area $\sqrt6/2$, **not** $\sqrt6$. This factor of two is a frequent source of lost marks. Meanwhile $\mathbf a\cdot\mathbf b=2$, so $\cos\theta=2/(\sqrt5\sqrt2)=2/\sqrt{10}$, giving an acute angle between these specific vectors.

A proof about a trigonometric identity must hold throughout its claimed domain. Dividing by $\sin x$ can discard solutions of a trigonometric equation where $\sin x=0$; dividing an alleged identity by $\cos x$ silently excludes the points where cosine vanishes. For equations, split off the zero-divisor case first. For identities, say which values of $x$ keep both sides defined and show each transformation respects that domain.

## Exam lens and common wrong turns

Paper 1 style rewards an exact angle, a labeled diagram and justified identities. Paper 2 style can combine bearings, 3D coordinates and numerical lengths. Paper 3 style may join a trigonometric model with a geometric constraint or ask you to compare possible intersections. These are original practice styles, not claims about future official papers.

- Calculator mode matters: $\sin(\pi/6)=1/2$ assumes radians. In degree mode, $\sin(30^\circ)=1/2$.
- A cross product is a **vector**; a dot product is a **scalar**. Only their magnitudes enter certain area or angle formulas.
- $\arccos$ returns one principal value. For a trig equation on a wider interval, use symmetry and periodicity to list all valid angles.
- A line and plane can be parallel and separate, parallel and coincident, or meet once. A zero dot product alone does not settle which parallel case occurs.

## Check yourself

With radius $4$ and angle $\pi/2$, a sector has arc length $2\pi$ and area $4\pi$. Vectors $(1,0,0)$ and $(0,1,0)$ are perpendicular and their cross product has magnitude $1$. On $0\leq x<2\pi$, $\cos x=0$ has solutions $\pi/2$ and $3\pi/2$. Try the individual lessons to build the technique, then the independently authored paper questions to combine techniques.
