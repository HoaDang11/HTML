<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>measure-unit</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            
        }

        div{
            font-size: 1.3rem;
        }

    </style>
</head>

<body>
    <p>Examples - rem</p>
    <hr>
    <div>
        <p>Length Measure Units Demo <br>
        (version 3 - applied fontsize - em)</p>
        <hr>
        <p>
            CSS has several different units for expressing a length. <br>
            Many CSS properties take "length" values, such as width, margin, padding, font-size, etc. <br>
            Length is a number followed by a length unit, such as 10px, 2em, etc. <br>
        </p>
    </div>

    <div>
        <p>Absolute Lengths <br>
            The absolute length units are fixed and a length expressed in any of these will appear as exactly that size. <br>
            
            Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout. <br>
            cm, mm, in, px, pt, pc <br>
        </p>
        <div>
            <p>
                Relative Lengths <br>
                Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.   <br>
                em, ex, ch, rem, vw, vh, vmix, vmax, %
            </p>
        </div>
    </div>
</body>

</html>