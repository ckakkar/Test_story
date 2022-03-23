var row = document.getElementById("myTable").rows.length;
console.log(row);

function addRow()
{
    var table = document.getElementById("myTable");
    var row = table.insertRow(row);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "Activity"+window.row;
    cell2.innerHTML = "A"+window.row;
    cell3.innerHTML =`<form method='post' action='new.php'><input class='boxHeight' type='text' id='Weight${window.row}' value='' size='5' /></form>`;
    cell4.innerHTML =`<form method='post' action='new.php'><input type='text' id='Grade${window.row}' class='boxHeight' size='5'>/<input type='text' id='OutOf${window.row}' class='boxHeight' size='5'></flag>`;
    cell5.innerHTML =`<span id='percen${window.row}'></span>`;
    window.row++;
}
const getMean = () => 
{ 
    var flag=0;
    var c;
    var sum=0;
    for(let i=1; i<window.row; i++)
    {
        var a = parseFloat(document.getElementById("Grade"+(i)).value);
        var b = parseFloat(document.getElementById('OutOf'+(i)).value);
        if(a>b || isNaN(a) ||isNaN(b))
        {
            alert("Wrong mathematical operation, activity ommited!");
            document.getElementById('percen'+(i)).innerHTML = NaN;
            flag++;
            continue;
        }
        if(document.getElementById('Grade'+(i)).value=="" || document.getElementById('OutOf'+(i)).value=="")
        {
            alert("Required values not provided, activity ommited!");
            document.getElementById('percen'+(i)).innerHTML = NaN;
            flag++
            continue;
        }
        c=a/b;
        sum+=c;
        document.getElementById('percen'+(i)).innerHTML = c;
         
    }
    soltn=(sum/(window.row-flag));
    bag=soltn*100
    var nice=""+(bag.toPrecision(4))+"/100";
    document.getElementById("result").innerHTML = nice;
}
const getAvg = () => 
{
    var d;
    var sum=0;
    var wsum=0
    for(let i=1; i<window.row; i++)
    {
        var a = parseFloat(document.getElementById("Grade"+(i)).value);
        var b = parseFloat(document.getElementById('OutOf'+(i)).value);
        var w = parseFloat(document.getElementById('Weight'+(i)).value);
        if(a>b || isNaN(a) || isNaN(b) || isNaN(w))
        {
            alert("Wrong mathematical operation, activity ommited!");
            document.getElementById('percen'+(i)).innerHTML = NaN;
            continue;
        }
        if(document.getElementById('Grade'+(i)).value=="" || document.getElementById('OutOf'+(i)).value=="" || document.getElementById('Weight'+(i)).value=="")
        {
            alert("Required values not entered, activity ommited!");
            document.getElementById('percen'+(i)).innerHTML = NaN;
            continue;
        }
        wsum+=w;
        d=w*(a/b);
        sum+=d;
        document.getElementById('percen'+(i)).innerHTML = d;
         
    }
    soltn=sum/wsum;
    bag=soltn*100
    var nice=""+(bag.toPrecision(4))+"/100";
    document.getElementById("result").innerHTML = nice;
}
