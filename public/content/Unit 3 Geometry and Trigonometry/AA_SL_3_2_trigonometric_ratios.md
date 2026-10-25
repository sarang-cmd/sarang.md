# Trigonometric ratios

> **SL 3.2 · AA SL core (also studied at HL)** · Original Sarang.md textbook chapter, not an IB publication. Worked solutions and mark allocations are independently written practice, not official mark schemes.

## Learning objectives

By the end of this chapter you should be able to:

- define sine, cosine and tangent in a right-angled triangle and use them to find sides and angles;
- state the exact values of the ratios for $30^{\circ}$, $45^{\circ}$ and $60^{\circ}$ and derive them from two special triangles;
- use the sine rule $\dfrac a{\sin A}=\dfrac b{\sin B}=\dfrac c{\sin C}$ to find sides and angles in any triangle;
- recognise and solve the **ambiguous case** (SSA), including the case with no triangle;
- use the cosine rule in both forms, for a side and for an angle;
- use the area formula $\dfrac12ab\sin C$;
- choose the right tool for a given triangle and solve a triangle completely;
- split a composite figure, such as a quadrilateral, into triangles and find lengths, angles and areas.

## Why this topic matters

Trigonometry was invented to measure what cannot be measured directly: the height of a pyramid, the distance across a river, the position of a star. The idea is that *similar triangles have the same ratios of sides*, so if you know one angle and one side of a right-angled triangle, you can find all the others. The sine and cosine rules extend the same logic to any triangle. These tools are the basis of surveying, navigation, engineering and physics (resolving forces, analysing waves). In the IB, Topic 3 begins with these ratios and develops them through applications (SL 3.3), the circle (SL 3.4 and SL 3.5), identities (SL 3.6), graphs (SL 3.7) and equations (SL 3.8). A secure command of the triangle rules is a must for Paper 1 and Paper 2 alike: nearly every year, a question requires you to find a missing side or angle in a non-right triangle, sometimes with the ambiguous case, and then compute an area. The marks depend on choosing the right rule, writing the substitution cleanly and keeping the calculator in the correct mode. This chapter gives you a decision procedure to make that choice reliably.

## Core ideas

### Right-angled triangles

In a right-angled triangle with an acute angle $\theta$, label the sides relative to $\theta$: the **hypotenuse** (opposite the right angle, the longest side), the **opposite** side (across from $\theta$) and the **adjacent** side (next to $\theta$, not the hypotenuse). Then
$$
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},\qquad \cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},\qquad \tan\theta=\frac{\text{opposite}}{\text{adjacent}}.
$$
These are remembered by SOH CAH TOA. They depend only on $\theta$, not on the size of the triangle. Note also that $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$ and, by Pythagoras, $\sin^{2}\theta+\cos^{2}\theta=1$ (proved in SL 3.6).

To find a **side**, choose the ratio that links the given side, the required side and the given angle, and solve for the unknown. To find an **angle**, use the inverse function: $\theta=\sin^{-1}\dfrac{\text{opp}}{\text{hyp}}$ and so on. Choose the right unit for the angle: degrees or radians, set on the calculator. The ratios of complementary angles are linked: $\sin\theta=\cos(90^{\circ}-\theta)$.

### Exact values for $30^{\circ}$, $45^{\circ}$ and $60^{\circ}$

Two special triangles give exact values.

- **The right isosceles triangle** has legs $1$ and $1$, so the hypotenuse is $\sqrt2$ and the angles are $45^{\circ}$: $\sin45^{\circ}=\cos45^{\circ}=\dfrac1{\sqrt2}=\dfrac{\sqrt2}2$ and $\tan45^{\circ}=1$.
- **Half an equilateral triangle** of side $2$ is a right triangle with hypotenuse $2$, base $1$ and height $\sqrt3$ (Pythagoras), with angles $30^{\circ}$ and $60^{\circ}$: $\sin30^{\circ}=\dfrac12$, $\cos30^{\circ}=\dfrac{\sqrt3}2$, $\tan30^{\circ}=\dfrac1{\sqrt3}$, $\sin60^{\circ}=\dfrac{\sqrt3}2$, $\cos60^{\circ}=\dfrac12$ and $\tan60^{\circ}=\sqrt3$.

A useful pattern is $\sin$ of $0^{\circ},30^{\circ},45^{\circ},60^{\circ},90^{\circ}$ is $\dfrac{\sqrt0}2,\dfrac{\sqrt1}2,\dfrac{\sqrt2}2,\dfrac{\sqrt3}2,\dfrac{\sqrt4}2$, and cosine is the same list in reverse. You need to know these cold for Paper 1, where answers are often required in exact form. In SL 3.5 the list is extended to all quadrants with the unit circle.

### Labelling a general triangle

In a triangle $ABC$, the side opposite angle $A$ is called $a$, and similarly for $b$ and $c$. The three angles add up to $180^{\circ}$. The following rules apply to any triangle.

### The sine rule

$$
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}.
$$
Each side divided by the sine of its opposite angle is the same number. (It equals the diameter of the circumscribed circle.) Use the sine rule when you know:

- two angles and one side (AAS or ASA): find the third angle by subtraction and then use the rule;
- two sides and an angle **opposite one of them** (SSA).

To find a side, put the unknown on top: $a=\dfrac{b\sin A}{\sin B}$. To find an angle, put the sines on top: $\sin B=\dfrac{b\sin A}a$.

### The ambiguous case (SSA)

When you know two sides and an angle opposite one of them, there may be $0$, $1$ or $2$ triangles. Suppose you know angle $A$, side $a$ (opposite $A$) and side $b$. Then $\sin B=\dfrac{b\sin A}a$.

- If this value is greater than $1$: **no triangle** exists.
- If it equals $1$: one right-angled triangle.
- If it is less than $1$ there are two possible angles $B$ and $180^{\circ}-B$ from the inverse sine, and the second one gives a valid triangle only if $A+(180^{\circ}-B)<180^{\circ}$. When $a<b$ (the side opposite the known angle is shorter than the other known side) *and* $\sin B<1$, both solutions are valid and there are **two** triangles. When $a\ge b$, the angle $B$ must be smaller than $A$, so the obtuse solution fails and there is **one** triangle.

The calculator returns only the acute angle $\sin^{-1}(\cdot)$; you must supply the obtuse alternative $180^{\circ}-B$ and check whether it fits. Always check that the angle sum is less than $180^{\circ}$. Examination questions often include the phrase "there are two possible triangles" or "find both possible values".

### The cosine rule

$$
c^{2}=a^{2}+b^{2}-2ab\cos C,\qquad \cos C=\frac{a^{2}+b^{2}-c^{2}}{2ab}.
$$
The side $c$ is opposite the angle $C$, which is the angle *between* sides $a$ and $b$. Use the cosine rule when you know:

- two sides and the **included** angle (SAS), to find the third side;
- all three sides (SSS), to find an angle.

When $C=90^{\circ}$, $\cos C=0$ and it becomes Pythagoras' theorem. If $C$ is obtuse, $\cos C<0$ and the formula for $\cos C$ gives a negative value. The cosine rule has no ambiguity: $\cos^{-1}$ gives the single correct angle in $[0^{\circ},180^{\circ}]$. When using SSS, find the **largest angle** first (opposite the longest side): then the remaining two angles must be acute and the sine rule can safely be used to find them.

### Choosing the rule: a decision table

Identify what you are given.

- **Right angle present:** SOH CAH TOA and Pythagoras.
- **Two angles and a side (any):** third angle by subtraction, then the sine rule.
- **Two sides and an included angle:** cosine rule for the third side.
- **Three sides:** cosine rule for the largest angle.
- **Two sides and a non-included angle:** sine rule (check the ambiguous case).

### The area of a triangle

$$
\text{Area}=\frac12ab\sin C,
$$
where $C$ is the angle between sides $a$ and $b$. This is the formula in the formula booklet. It generalises $\dfrac12\times\text{base}\times\text{height}$, since the height on side $a$ is $b\sin C$. It works for any triangle, including an obtuse one, since $\sin C>0$ for $0^{\circ}<C<180^{\circ}$. If you know three sides but no angle, use the cosine rule for one angle, then the area formula.

### Composite figures

For a quadrilateral or any polygon, **divide into triangles**, usually along a diagonal, and calculate each triangle in turn. The common diagonal is the link: find it from one triangle, and use it in the next. The area of the quadrilateral is the sum of the areas of the triangles. In a figure with a given angle at a vertex and several sides, work out the missing lengths in a sensible order so that each step uses known quantities.

### Accuracy and rounding

Keep at least $4$ significant figures in intermediate steps, or store the values. Round the final answer to $3$ significant figures, and angles to $3$ significant figures (or one decimal place) as the question states. Give lengths with units.

## Worked examples

### Example 1 (a right triangle, 4 marks)

In a right-angled triangle, the hypotenuse is $15$ cm and one acute angle is $32^{\circ}$. Find the side opposite that angle and the side adjacent to it.

*Solution.* Opposite $=15\sin32^{\circ}\approx7.95$ cm. Adjacent $=15\cos32^{\circ}\approx12.7$ cm.

Check with Pythagoras: $7.949^{2}+12.721^{2}=63.19+161.8=225$ ✓.

### Example 2 (finding an angle, 3 marks)

In a right triangle the side opposite $\theta$ is $7$ cm and the adjacent side is $9$ cm. Find $\theta$.

*Solution.* $\tan\theta=\dfrac79$, so $\theta=\tan^{-1}\dfrac79\approx37.9^{\circ}$.

### Example 3 (exact values, 5 marks)

A right-angled triangle has a hypotenuse of $10$ cm and an angle of $30^{\circ}$. Find the other two sides in exact form, and the area.

*Solution.* The side opposite $30^{\circ}$ is $10\sin30^{\circ}=5$ cm. The adjacent side is $10\cos30^{\circ}=10\cdot\dfrac{\sqrt3}2=5\sqrt3$ cm. The area is $\dfrac12\cdot5\cdot5\sqrt3=\dfrac{25\sqrt3}2\approx21.7\ \text{cm}^{2}$.

### Example 4 (the sine rule for sides, 5 marks)

In triangle $ABC$, $A=48^{\circ}$, $B=75^{\circ}$ and $a=12$ cm. Find $b$, $C$ and $c$.

*Solution.* $C=180^{\circ}-48^{\circ}-75^{\circ}=57^{\circ}$. $b=\dfrac{12\sin75^{\circ}}{\sin48^{\circ}}\approx15.6$ cm. $c=\dfrac{12\sin57^{\circ}}{\sin48^{\circ}}\approx13.5$ cm.

Check: the largest side $b$ is opposite the largest angle $B$ ✓.

### Example 5 (the cosine rule for a side, 5 marks)

In triangle $ABC$, $a=8$ cm, $b=11$ cm and $C=50^{\circ}$. Find $c$ and the area.

*Solution.* $c^{2}=64+121-2(8)(11)\cos50^{\circ}=185-176(0.6428)=71.87$, so $c\approx8.48$ cm. The area is $\dfrac12(8)(11)\sin50^{\circ}\approx33.7\ \text{cm}^{2}$.

### Example 6 (the cosine rule for an angle, 5 marks)

A triangle has sides $7$ cm, $9$ cm and $12$ cm. Find its largest angle and its area.

*Solution.* The largest angle $C$ is opposite the side $12$. $\cos C=\dfrac{49+81-144}{2(7)(9)}=\dfrac{-14}{126}=-0.1111$, so $C\approx96.4^{\circ}$. The area is $\dfrac12(7)(9)\sin96.38^{\circ}\approx31.3\ \text{cm}^{2}$.

Check with Heron's formula: $s=14$, area $=\sqrt{14\cdot7\cdot5\cdot2}=\sqrt{980}\approx31.3$ ✓.

### Example 7 (the ambiguous case with two triangles, 8 marks)

In triangle $ABC$, $A=35^{\circ}$, $a=10$ cm and $b=14$ cm. Find the possible values of $B$ and $c$.

*Solution.* $\sin B=\dfrac{14\sin35^{\circ}}{10}=0.8030$. The calculator gives $B\approx53.4^{\circ}$, and the second possibility is $B=180^{\circ}-53.4^{\circ}=126.6^{\circ}$. For $B=53.4^{\circ}$: $C=180-35-53.4=91.6^{\circ}$, $c=\dfrac{10\sin91.6^{\circ}}{\sin35^{\circ}}\approx17.4$ cm. For $B=126.6^{\circ}$: $C=180-35-126.6=18.4^{\circ}$, so $c=\dfrac{10\sin18.4^{\circ}}{\sin35^{\circ}}\approx5.51$ cm. Both triangles are valid since $35+126.6=161.6<180$. Two triangles exist because $a<b$.

### Example 8 (no triangle, 3 marks)

Show that no triangle exists with $A=40^{\circ}$, $a=5$ cm and $b=12$ cm.

*Solution.* $\sin B=\dfrac{12\sin40^{\circ}}5=1.54>1$, which is impossible. The side $a$ is too short to reach the opposite side, so there is no triangle.

### Example 9 (a unique solution with $a>b$, 5 marks)

In triangle $ABC$, $A=50^{\circ}$, $a=7$ cm and $b=5$ cm. Find $B$, $C$ and $c$.

*Solution.* $\sin B=\dfrac{5\sin50^{\circ}}{7}=0.5472$, so $B\approx33.2^{\circ}$. The alternative $146.8^{\circ}$ is impossible because $50+146.8>180$. This is because $a>b$. Then $C=180-50-33.2=96.8^{\circ}$ and $c=\dfrac{7\sin96.8^{\circ}}{\sin50^{\circ}}\approx9.07$ cm.

### Example 10 (a quadrilateral, 9 marks)

In quadrilateral $ABCD$, $AB=5$ cm, $BC=6$ cm, $\angle ABC=100^{\circ}$, $CD=7$ cm and $DA=4$ cm. Find $AC$, angle $ADC$ and the area.

*Solution.* In triangle $ABC$: $AC^{2}=25+36-60\cos100^{\circ}=61+10.42=71.42$, so $AC\approx8.45$ cm. In triangle $ACD$: $\cos D=\dfrac{4^{2}+7^{2}-AC^{2}}{2(4)(7)}=\dfrac{65-71.42}{56}=-0.1146$, so $\angle ADC\approx96.6^{\circ}$. The area is $\dfrac12(5)(6)\sin100^{\circ}+\dfrac12(4)(7)\sin96.58^{\circ}=14.77+13.91\approx28.7\ \text{cm}^{2}$.

### Example 11 (exact trigonometric ratios from one ratio, 4 marks)

Given that $\sin\theta=\dfrac35$ and $\theta$ is acute, find the exact values of $\cos\theta$ and $\tan\theta$.

*Solution.* Draw a right-angled triangle with opposite $3$ and hypotenuse $5$. The adjacent side is $\sqrt{25-9}=4$. So $\cos\theta=\dfrac45$ and $\tan\theta=\dfrac34$.

### Example 12 (the area given, 4 marks)

A triangle has sides $6$ cm and $7$ cm enclosing an angle $C$. The area is $15\ \text{cm}^{2}$. Find $C$ if it is acute, and state the other possible value.

*Solution.* $15=\dfrac12(6)(7)\sin C=21\sin C$, so $\sin C=\dfrac57=0.7143$. Then $C\approx45.6^{\circ}$ (acute). The other possible angle in $0^{\circ}<C<180^{\circ}$ is $180^{\circ}-45.6^{\circ}=134.4^{\circ}$.

## Using your GDC

Set the angle mode to **degrees** at the start (the mode symbol is shown on the home screen), and check it before every angle calculation: radians instead of degrees is the most common calculator error. Use brackets in the cosine rule: $\sqrt{a^{2}+b^{2}-2ab\cos(C)}$, and be careful that $2ab\cos C$ is evaluated with the angle in brackets. Store intermediate values (such as $AC$) in memory. The inverse functions $\sin^{-1}$, $\cos^{-1}$ and $\tan^{-1}$ return angles in the principal ranges: $\sin^{-1}$ gives an angle between $-90^{\circ}$ and $90^{\circ}$, so for an obtuse alternative subtract from $180^{\circ}$. Some GDCs have a triangle-solving application: enter what is known, and it returns all solutions including both ambiguous solutions. This is useful as a check, but you must still show the method on paper. Graphing $y=\sin x$ and a horizontal line shows why there can be two solutions. Menu names vary by model.

## Common mistakes

1. **Calculator in radian mode** when working in degrees (or the reverse).
2. **Using the wrong rule**: the cosine rule is for SAS or SSS; the sine rule requires a side and its opposite angle.
3. **Using a non-included angle** in the cosine rule or the area formula: the angle in $\dfrac12ab\sin C$ must be between $a$ and $b$.
4. **Missing the second solution** in the ambiguous case, or including an invalid one that makes the angle sum exceed $180^{\circ}$.
5. **Mislabelling the sides**: the opposite side to $\theta$ depends on which angle you are using.
6. **Rounding early**, especially in the cosine rule where a rounded side can change the third decimal of an angle.
7. **Forgetting that $\cos C$ may be negative**, and that an obtuse angle's sine is positive.
8. **Giving a decimal where an exact value was requested**, such as $\sin60^{\circ}$ as $0.866$.

## Exam technique and command terms

**Find** and **calculate** require working and a numerical answer. **Show that** requires you to reach a given value from exact steps: use exact values (such as $\sin60^{\circ}=\dfrac{\sqrt3}2$) and do not substitute decimals early. **Write down** is used for exact values, in which the answer is from memory. **Hence** links parts, for instance finding the area using the angle found earlier.

Present a triangle question like this: (1) sketch and label the triangle with the data; (2) name the rule; (3) write it with the values substituted; (4) compute with the full calculator value and state the result to $3$ significant figures. In a multi-part problem, label the points exactly as in the question. In an ambiguous case problem, state clearly: "since $a<b$ there are two possible triangles" and report both. Check the answer for sense: the largest side is opposite the largest angle, and the angles add to $180^{\circ}$.

## Connections

SL 3.1 uses these ratios inside three-dimensional solids, and SL 3.3 applies them to bearings, angles of elevation and depression, and surveying. SL 3.4 and SL 3.5 extend the ratios from acute angles to any angle with the unit circle and introduce radians, and SL 3.6 gives the identities such as $\sin^{2}\theta+\cos^{2}\theta=1$. SL 3.7 and SL 3.8 plot and solve equations in $\sin x$, $\cos x$ and $\tan x$ (the ambiguous case foreshadows the two solutions of $\sin x=k$ in $[0^{\circ},360^{\circ}]$). AHL 3.9 to 3.11 add the reciprocal ratios and compound angle identities. AHL 3.13 gives the angle between vectors as $\cos\theta=\dfrac{\mathbf u\cdot\mathbf v}{|\mathbf u||\mathbf v|}$, which is the vector form of the cosine rule, and AHL 3.16 gives the area of a triangle as $\dfrac12|\mathbf u\times\mathbf v|$, the vector form of $\dfrac12ab\sin C$. SL 2.1 gave $m=\tan\theta$ for the gradient of a line. In Unit 5, the derivative of $\sin x$ requires radian measure, and trigonometric integrals appear in areas and volumes. In Unit 4, nothing is directly trigonometric, but bearings and spread in two dimensions use these ideas.

## Check your understanding

1. In a right triangle with hypotenuse $20$ cm and an angle of $28^{\circ}$, find the opposite and adjacent sides.
2. In a right triangle, the opposite side is $5$ cm and the hypotenuse is $13$ cm. Find the angle.
3. In triangle $ABC$, $A=62^{\circ}$, $B=51^{\circ}$ and $b=9$ cm. Find $a$ and $C$.
4. In triangle $ABC$, $a=9$ cm, $b=13$ cm and $C=65^{\circ}$. Find $c$ and the area.
5. A triangle has sides $5$, $8$ and $10$ cm. Find the largest angle.
6. In triangle $ABC$, $A=30^{\circ}$, $a=12$ cm and $b=20$ cm. Find the two possible values of $B$ and the corresponding values of $c$.
7. Given $\cos\theta=\dfrac5{13}$ and $\theta$ acute, find the exact values of $\sin\theta$ and $\tan\theta$.
8. A triangle has sides $6$ cm and $7$ cm and area $15\ \text{cm}^{2}$. Find the two possible values for the included angle.
9. By considering an equilateral triangle of side $2$, show that $\sin60^{\circ}=\dfrac{\sqrt3}2$ and $\cos60^{\circ}=\dfrac12$.
10. In triangle $ABC$, $A=50^{\circ}$, $a=7$ cm and $b=5$ cm. Find $B$ and $c$, and explain why there is only one triangle.

### Answers

1. Opposite $=20\sin28^{\circ}\approx9.39$ cm; adjacent $=20\cos28^{\circ}\approx17.7$ cm.
2. $\sin\theta=\dfrac5{13}$, so $\theta\approx22.6^{\circ}$.
3. $a=\dfrac{9\sin62^{\circ}}{\sin51^{\circ}}\approx10.2$ cm and $C=180-62-51=67^{\circ}$.
4. $c^{2}=81+169-2(9)(13)\cos65^{\circ}=250-98.9=151.1$, so $c\approx12.3$ cm. The area is $\dfrac12(9)(13)\sin65^{\circ}\approx53.0\ \text{cm}^{2}$.
5. The largest angle is opposite $10$: $\cos\theta=\dfrac{25+64-100}{80}=-0.1375$, so $\theta\approx97.9^{\circ}$.
6. $\sin B=\dfrac{20\sin30^{\circ}}{12}=0.8333$, so $B\approx56.4^{\circ}$ or $B\approx123.6^{\circ}$. For $B=56.4^{\circ}$: $C=93.6^{\circ}$ and $c=\dfrac{12\sin93.6^{\circ}}{\sin30^{\circ}}\approx24.0$ cm. For $B=123.6^{\circ}$: $C=26.4^{\circ}$ and $c\approx10.7$ cm.
7. The opposite side is $\sqrt{169-25}=12$, so $\sin\theta=\dfrac{12}{13}$ and $\tan\theta=\dfrac{12}5$.
8. $15=21\sin C$ gives $\sin C=\dfrac57$, so $C\approx45.6^{\circ}$ or $C\approx134.4^{\circ}$.
9. Split the equilateral triangle in half along an altitude. It gives a right triangle with hypotenuse $2$, base $1$ and height $\sqrt{4-1}=\sqrt3$, and its base angle is $60^{\circ}$, as in the equilateral triangle. So $\sin60^{\circ}=\dfrac{\sqrt3}2$ and $\cos60^{\circ}=\dfrac12$.
10. $\sin B=\dfrac{5\sin50^{\circ}}{7}=0.5472$, so $B\approx33.2^{\circ}$ and $C\approx96.8^{\circ}$, with $c=\dfrac{7\sin96.8^{\circ}}{\sin50^{\circ}}\approx9.07$ cm. The other value $B=146.8^{\circ}$ would make $A+B=196.8^{\circ}>180^{\circ}$, so it is impossible. Since $a>b$, angle $B$ is smaller than $A$.

## Summary

- $\sin\theta=\frac{\text{opp}}{\text{hyp}}$, $\cos\theta=\frac{\text{adj}}{\text{hyp}}$, $\tan\theta=\frac{\text{opp}}{\text{adj}}$. Exact values at $30^{\circ}$, $45^{\circ}$ and $60^{\circ}$ come from the two special triangles.
- Sine rule: $\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$. Cosine rule: $c^{2}=a^{2}+b^{2}-2ab\cos C$. Area: $\frac12ab\sin C$.
- Choose the rule: AAS or ASA and SSA use the sine rule; SAS and SSS use the cosine rule.
- Ambiguous case: if $\sin B>1$, no triangle; if $a<b$ and $\sin B<1$, two triangles ($B$ and $180^{\circ}-B$); if $a\ge b$, one.
- For composite figures, split into triangles along a diagonal.
- Check the mode, keep full accuracy and give $3$ significant figures.

## Formula booklet

**Booklet cross-check:** The supplied IBO 2023, Mathematics: analysis and approaches HL formula booklet, Version 1.0, printed p. 5 (PDF p. 7), lists sine rule, cosine rule and triangle area under SL 3.2. Derive and justify all other steps and conditions.

---

[Geometry & Trigonometry master guide](/units/geometry-and-trigonometry/master-guide) · [View formula booklet](/formula-booklet) · [Browse original paper practice](/practice)
