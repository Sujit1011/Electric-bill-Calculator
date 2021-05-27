function Calculation() {
    var value = parseInt(document.getElementById("value").value);
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var r3 = parseFloat(document.getElementById("r3").value);
    var r4 = parseFloat(document.getElementById("r4").value);

    var u1 = parseFloat(document.getElementById("u1").value);
    var u2 = parseFloat(document.getElementById("u2").value);
    var u3 = parseFloat(document.getElementById("u3").value);
    var u4 = parseFloat(document.getElementById("u4").value);

    var amt1 = parseFloat(document.getElementById("amt1").value);
    var amt2 = parseFloat(document.getElementById("amt2").value);
    var amt3 = parseFloat(document.getElementById("amt3").value);
    var amt4 = parseFloat(document.getElementById("amt4").value);
    if (value >= 1 && value <= 100) {
        var u1 = value;
        var u2 = 0;
        var u3 = 0;
        var u4 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
    }
    if (value >= 101 && value <= 200) {
        var u1 = 100;
        var u2 = value - u1;
        var u3 = 0;
        var u4 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
    }
    if (value >= 201 && value <= 300) {
        var u1 = 100;
        var u2 = 100;
        var u3 = value - (u1+u2);
        var u4 = 0;
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
    }
    if (value > 300) {
        var u1 = 100;
        var u2 = 100;
        var u3 = 100;
        var u4 = value - (u1+u2+u3);
        var amt1 = u1 * r1;
        var amt2 = u2 * r2;
        var amt3 = u3 * r3;
        var amt4 = u4 * r4;
    }
    var totalamt = amt1 + amt2 + amt3 + amt4;
    document.getElementById("total").innerHTML = totalamt;

    document.getElementById("u1").value = u1;
    document.getElementById("u2").value = u2;
    document.getElementById("u3").value = u3;
    document.getElementById("u4").value = u4;

    document.getElementById("amt1").value = amt1;
    document.getElementById("amt2").value = amt2;
    document.getElementById("amt3").value = amt3;
    document.getElementById("amt4").value = amt4;
}

function Generate()
{
    var r1 = parseFloat(document.getElementById("r1").value);
    var r2 = parseFloat(document.getElementById("r2").value);
    var r3 = parseFloat(document.getElementById("r3").value);
    var r4 = parseFloat(document.getElementById("r4").value);

    var u1 = parseFloat(document.getElementById("u1").value);
    var u2 = parseFloat(document.getElementById("u2").value);
    var u3 = parseFloat(document.getElementById("u3").value);
    var u4 = parseFloat(document.getElementById("u4").value);

    var amt1 = parseFloat(document.getElementById("amt1").value);
    var amt2 = parseFloat(document.getElementById("amt2").value);
    var amt3 = parseFloat(document.getElementById("amt3").value);
    var amt4 = parseFloat(document.getElementById("amt4").value);

    amt1 = u1*r1;
    amt2 = u2*r2;
    amt3 = u3*r3;
    amt4 = u4*r4;

    var totalamt = amt1 + amt2 + amt3 + amt4;
    document.getElementById("total").innerHTML = totalamt;

    document.getElementById("amt1").value = amt1;
    document.getElementById("amt2").value = amt2;
    document.getElementById("amt3").value = amt3;
    document.getElementById("amt4").value = amt4;


}