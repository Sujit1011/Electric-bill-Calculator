function Calculation() {
    var value = parseInt(document.getElementById("value").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var r3 = parseFloat(document.getElementById("r3").value);
    var r4 = parseFloat(document.getElementById("r4").value);
    var r5 = parseFloat(document.getElementById("r5").value);
    var r6 = parseFloat(document.getElementById("r6").value);

    var u1 = parseFloat(document.getElementById("u1").value);
    var u2 = parseFloat(document.getElementById("u2").value);
    var u3 = parseFloat(document.getElementById("u3").value);
    var u4 = parseFloat(document.getElementById("u4").value);
    var u5 = parseFloat(document.getElementById("u5").value);
    var u6 = parseFloat(document.getElementById("u6").value);

    var amt1 = parseFloat(document.getElementById("amt1").value);
    var amt2 = parseFloat(document.getElementById("amt2").value);
    var amt3 = parseFloat(document.getElementById("amt3").value);
    var amt4 = parseFloat(document.getElementById("amt4").value);
    var amt5 = parseFloat(document.getElementById("amt5").value);
    var amt6 = parseFloat(document.getElementById("amt6").value);
    if (value >= 0 && value <= 102) {
        var u1 = value;
        var u2 = 0;
        var u3 = 0;
        var u4 = 0;
        var u5 = 0;
        var u6 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    if (value >= 103 && value <= 180) {
        var u1 = 102;
        var u2 = value - u1;
        var u3 = 0;
        var u4 = 0;
        var u5 = 0;
        var u6 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    if (value >= 181 && value <= 300) {
        var u1 = 102;
        var u2 = 78;
        var u3 = value - (u1+u2);
        var u4 = 0;
        var u5 = 0;
        var u6 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    if (value >= 301 && value <= 600) {
        var u1 = 102;
        var u2 = 78;
        var u3 = 120;
        var u4 = value - (u1+u2+u3);
        var u5 = 0;
        var u6 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    if (value >= 601 && value <= 900) {
        var u1 = 102;
        var u2 = 78;
        var u3 = 120;
        var u4 = 300;
        var u5 = value - (u1+u2+u3+u4);
        var u6 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    if (value > 900) {
        var u1 = 102;
        var u2 = 78;
        var u3 = 120;
        var u4 = 300;
        var u5 = 300;
        var u6 = value - (u1+u2+u3+u4+u5);
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
        var amt5 = u5 * r5;
        var amt6 = u6 * r6;
    }
    var totalamt = amt1 + amt2 + amt3 + amt4 + amt5 + amt6;
    document.getElementById("total").innerHTML = totalamt;

    document.getElementById("u1").value = u1;
    document.getElementById("u2").value = u2;
    document.getElementById("u3").value = u3;
    document.getElementById("u4").value = u4;
    document.getElementById("u5").value = u5;
    document.getElementById("u6").value = u6;

    document.getElementById("amt1").value = amt1;
    document.getElementById("amt2").value = amt2;
    document.getElementById("amt3").value = amt3;
    document.getElementById("amt4").value = amt4;
    document.getElementById("amt5").value = amt5;
    document.getElementById("amt6").value = amt6;
}

function Generate()
{
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var r3 = parseFloat(document.getElementById("r3").value);
    var r4 = parseFloat(document.getElementById("r4").value);
    var r5 = parseFloat(document.getElementById("r5").value);
    var r6 = parseFloat(document.getElementById("r6").value);

    var u1 = parseFloat(document.getElementById("u1").value);
    var u2 = parseFloat(document.getElementById("u2").value);
    var u3 = parseFloat(document.getElementById("u3").value);
    var u4 = parseFloat(document.getElementById("u4").value);
    var u5 = parseFloat(document.getElementById("u5").value);
    var u6 = parseFloat(document.getElementById("u6").value);

    var amt1 = parseFloat(document.getElementById("amt1").value);
    var amt2 = parseFloat(document.getElementById("amt2").value);
    var amt3 = parseFloat(document.getElementById("amt3").value);
    var amt4 = parseFloat(document.getElementById("amt4").value);
    var amt5 = parseFloat(document.getElementById("amt5").value);
    var amt6 = parseFloat(document.getElementById("amt6").value);

    amt1 = u1*r1;
    amt2 = u2*r2;
    amt3 = u3*r3;
    amt4 = u4*r4;
    amt5 = u5*r5;
    amt6 = u6*r6;

    var totalamt = amt1 + amt2 + amt3 + amt4 + amt5 + amt6;
    document.getElementById("total").innerHTML = totalamt;

    document.getElementById("amt1").value = amt1;
    document.getElementById("amt2").value = amt2;
    document.getElementById("amt3").value = amt3;
    document.getElementById("amt4").value = amt4;
    document.getElementById("amt5").value = amt5;
    document.getElementById("amt6").value = amt6;



}