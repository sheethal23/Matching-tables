/*
This webpage contains items from both sections 1 and 2.
*/

/*
ToDo: populate new cells with values
*/

//keeps track of respective table rows and coloumns
var aRows = 0;
var aCols = 0;
var bCols = 0;
var bRows = 0;

//global variable to keep tr
var percentage_count = 0;

var tableA = document.getElementById("tableA");

console.log("Hello");
var arr=["10-point", "10th", "11-point", "12-point", "16-point", "18-point", "1st", "2,4,5-t", "2,4-d", "20-point", "2D", "2nd", "30-30", "3D", "3-D", "3M", "3rd", "48-point", "4-D", "4GL", "4H", "4th", "5-point", "5-T", "5th", "6-point", "6th", "7-point", "7th", "8-point", "8th", "9-point", "9th", "a", "a'", "a-", "A&M", "A&P", "A.", "A.A.A.", "A.B.", "A.B.A.", "A.C.", "A.D.", "A.D.C.", "A.F.", "A.F.A.M.", "A.G.", "A.H.", "A.I.", "A.I.A.", "A.I.D.", "A.L.", "A.L.P.", "A.M.", "A.M.A.", "A.M.D.G.", "A.N.", "a.p.", "a.r.", "A.R.C.S.", "A.U.", "A.U.C.", "A.V.", "a.w.", "A.W.O.L.", "A/C", "A/F", "A/O", "A/P", "A/V", "A1", "A-1", "A4", "A5", "AA", "AAA", "AAAA", "AAAAAA", "AAAL", "AAAS", "Aaberg", "Aachen", "AAE", "AAEE", "AAF", "AAG", "aah", "aahed", "aahing", "aahs", "AAII", "aal", "Aalborg", "Aalesund", "aalii", "aaliis", "aals", "Aalst", "Aalto", "AAM", "AAMSI", "Aandahl", "A-and-R", "Aani", "AAO", "AAP", "AAPSS", "Aaqbiye", "Aar", "Aara", "Aarau", "AARC", "aardvark", "aardvarks", "aardwolf", "aardwolves", "Aaren", "Aargau", "aargh", "Aarhus", "Aarika", "Aaron", "Aaronic", "Aaronical", "Aaronite", "Aaronitic", "Aaron's-beard", "Aaronsburg", "Aaronson", "AARP", "aarrgh", "aarrghh", "Aaru", "AAS", "A'asia", "aasvogel", "aasvogels", "AAU", "AAUP", "AAUW", "AAVSO", "AAX", "A-axes", "A-axis", "AB", "ab-", "ABA", "Ababa", "Ababdeh", "Ababua", "abac", "abaca", "abacay", "abacas", "abacate", "abacaxi", "abaci", "abacinate", "abacination", "abacisci", "abaciscus", "abacist", "aback", "abacli", "Abaco", "abacot", "abacterial", "abactinal", "abactinally", "abaction", "abactor", "abaculi", "abaculus", "abacus", "abacuses", "Abad", "abada", "Abadan", "Abaddon", "abadejo", "abadengo", "abadia", "Abadite", "abaff", "abaft", "Abagael", "Abagail", "Abagtha", "abay", "abayah", "Abailard", "abaisance", "abaised", "abaiser", "abaisse", "abaissed", "abaka", "Abakan", "abakas", "Abakumov", "abalation", "abalienate", "abalienated", "abalienating", "abalienation", "abalone", "abalones", "Abama", "abamp", "abampere", "abamperes", "abamps", "Abana", "aband", "abandon", "abandonable", "abandoned", "abandonedly", "abandonee", "abandoner", "abandoners", "abandoning", "abandonment", "abandonments", "abandons", "abandum", "abanet", "abanga", "Abanic", "abannition", "Abantes", "abapical", "abaptiston", "abaptistum", "Abarambo", "Abarbarea", "Abaris", "abarthrosis", "abarticular", "abarticulation", "Abas", "abase", "abased", "abasedly", "abasedness", "abasement", "abasements", "abaser", "abasers", "abases", "Abasgi", "abash", "abashed", "abashedly", "abashedness", "abashes", "abashing", "abashless", "abashlessly", "abashment", "abashments", "abasia", "abasias", "abasic", "abasing", "abasio", "abask", "abassi", "Abassieh", "Abassin", "abastard", "abastardize", "abastral", "abatable", "abatage", "Abate", "abated", "abatement", "abatements", "abater", "abaters", "abates", "abatic", "abating", "abatis", "abatised", "abatises", "abatjour", "abatjours", "abaton", "abator", "abators", "ABATS", "abattage", "abattis", "abattised", "abattises", "abattoir", "abattoirs", "abattu", "abattue", "Abatua", "abature", "abaue", "abave", "abaxial", "abaxile", "abaze", "abb", "Abba", "abbacy", "abbacies", "abbacomes", "Abbadide", "Abbai", "abbaye", "abbandono", "abbas", "abbasi", "Abbasid", "abbassi", "Abbassid", "Abbasside", "Abbate", "abbatial", "abbatical", "abbatie", "Abbe", "Abbey", "abbeys", "abbey's", "abbeystead", "abbeystede", "abbes", "abbess", "abbesses", "abbest", "Abbevilean", "Abbeville", "Abbevillian", "Abbi", "Abby", "Abbie", "Abbye", "Abbyville", "abboccato", "abbogada", "Abbot", "abbotcy", "abbotcies", "abbotnullius", "abbotric", "abbots", "abbot's", "Abbotsen", "Abbotsford", "abbotship", "abbotships", "Abbotson", "Abbotsun", "Abbott", "Abbottson", "Abbottstown", "Abboud", "abbozzo", "ABBR", "abbrev", "abbreviatable", "abbreviate", "abbreviated", "abbreviately", "abbreviates", "abbreviating", "abbreviation", "abbreviations", "abbreviator", "abbreviatory", "abbreviators", "abbreviature", "abbroachment", "ABC", "abcess", "abcissa", "abcoulomb", "ABCs", "abd", "abdal", "abdali", "abdaria", "abdat", "Abdel", "Abd-el-Kadir", "Abd-el-Krim", "Abdella", "Abderhalden", "Abderian", "Abderite", "Abderus", "abdest", "Abdias", "abdicable", "abdicant", "abdicate", "abdicated", "abdicates", "abdicating", "abdication", "abdications", "abdicative", "abdicator", "Abdiel", "abditive", "abditory", "abdom", "abdomen", "abdomens", "abdomen's", "abdomina", "abdominal", "Abdominales", "abdominalia", "abdominalian", "abdominally", "abdominals", "abdominoanterior", "abdominocardiac", "abdominocentesis", "abdominocystic", "abdominogenital", "abdominohysterectomy", "abdominohysterotomy", "abdominoposterior", "abdominoscope", "abdominoscopy", "abdominothoracic", "abdominous", "abdomino-uterotomy", "abdominovaginal", "abdominovesical", "Abdon", "Abdu", "abduce", "abduced", "abducens", "abducent", "abducentes", "abduces", "abducing", "abduct", "abducted", "abducting", "abduction", "abductions", "abduction's", "abductor", "abductores", "abductors", "abductor's", "abducts", "Abdul", "Abdul-Aziz", "Abdul-baha", "Abdulla", "Abe", "a-be", "abeam", "abear", "abearance", "Abebi", "abecedaire", "abecedary", "abecedaria", "abecedarian", "abecedarians", "abecedaries", "abecedarium", "abecedarius", "abed", "abede", "abedge", "Abednego", "abegge", "Abey", "abeyance", "abeyances", "abeyancy", "abeyancies", "abeyant", "abeigh", "ABEL", "Abelard", "abele", "abeles", "Abelia", "Abelian", "Abelicea", "Abelite", "Abell", "Abelmoschus", "abelmosk", "abelmosks", "abelmusk", "Abelonian", "Abelson", "abeltree", "Abencerrages", "abend", "abends", "Abenezra", "abenteric", "Abeokuta", "abepithymia", "ABEPP", "Abercromby", "Abercrombie", "Aberdare", "aberdavine", "Aberdeen", "Aberdeenshire", "aberdevine", "Aberdonian", "aberduvine", "Aberfan", "Aberglaube", "Aberia", "Aberystwyth", "Abernant", "Abernathy", "abernethy", "Abernon", "aberr", "aberrance", "aberrancy", "aberrancies", "aberrant", "aberrantly", "aberrants", "aberrate", "aberrated", "aberrating", "aberration", "aberrational", "aberrations", "aberrative", "aberrator", "aberrometer", "aberroscope", "Abert", "aberuncate", "aberuncator", "abesse", "abessive", "abet", "abetment", "abetments", "abets", "abettal", "abettals", "abetted", "abetter", "abetters", "abetting", "abettor", "abettors", "Abeu", "abevacuation", "abfarad", "abfarads", "ABFM", "Abgatha", "ABHC", "abhenry", "abhenries", "abhenrys", "abhinaya", "abhiseka", "abhominable", "abhor", "abhorred", "abhorrence", "abhorrences", "abhorrency", "abhorrent", "abhorrently", "abhorrer", "abhorrers", "abhorrible", "abhorring", "abhors", "Abhorson", "ABI", "aby", "Abia", "Abiathar", "Abib", "abichite", "abidal", "abidance", "abidances", "abidden", "abide", "abided", "abider", "abiders", "abides", "abidi", "abiding", "abidingly", "abidingness", "Abidjan", "Abydos", "Abie", "abye", "abied", "abyed", "abiegh", "abience", "abient", "Abies", "abyes", "abietate", "abietene", "abietic", "abietin", "Abietineae", "abietineous", "abietinic", "abietite", "Abiezer", "Abigael", "Abigail", "abigails", "abigailship", "Abigale", "abigeat", "abigei", "abigeus", "Abihu", "abying", "Abijah", "Abyla", "abilao", "Abilene", "abiliment", "Abilyne", "abilitable", "ability", "abilities", "ability's", "abilla", "abilo", "abime", "Abimelech", "Abineri", "Abingdon", "Abinger", "Abington", "Abinoam", "Abinoem", "abintestate", "abiogeneses", "abiogenesis", "abiogenesist", "abiogenetic", "abiogenetical", "abiogenetically", "abiogeny", "abiogenist", "abiogenous", "abiology", "abiological", "abiologically", "abioses", "abiosis", "abiotic", "abiotical", "abiotically", "abiotrophy", "abiotrophic", "Abipon", "Abiquiu", "abir", "abirritant", "abirritate", "abirritated", "abirritating", "abirritation", "abirritative", "abys", "Abisag", "Abisha", "Abishag", "Abisia", "abysm", "abysmal", "abysmally", "abysms", "Abyss", "abyssa", "abyssal", "abysses", "Abyssinia", "Abyssinian", "abyssinians", "abyssobenthonic", "abyssolith", "abyssopelagic", "abyss's", "abyssus", "abiston", "abit", "Abitibi", "Abiu", "abiuret", "Abixah", "abject", "abjectedness", "abjection", "abjections", "abjective", "abjectly", "abjectness", "abjectnesses", "abjoint", "abjudge", "abjudged", "abjudging", "abjudicate", "abjudicated", "abjudicating", "abjudication", "abjudicator", "abjugate", "abjunct", "abjunction", "abjunctive", "abjuration", "abjurations", "abjuratory", "abjure", "abjured", "abjurement", "abjurer", "abjurers", "abjures", "abjuring", "abkar", "abkari", "abkary", "Abkhas", "Abkhasia", "Abkhasian", "Abkhaz", "Abkhazia", "Abkhazian", "abl", "abl.", "ablach", "ablactate", "ablactated", "ablactating", "ablactation", "ablaqueate", "ablare", "A-blast", "ablastemic", "ablastin", "ablastous", "ablate", "ablated", "ablates", "ablating", "ablation", "ablations"]

/*
- adds a row to the table
- populates the rows columns/cells with an incrementing number
*/
function addRowA()
{
	aRows++;
	//finds the table element to be added
	var table = document.getElementById("tableA");

	//creates empty <tr> (taBle row) element
	var row = table.insertRow(0);

	//inserts cells
	for(var i = 0; i < aCols; i++)
	{
		row.insertCell();
		table.rows[0].cells[i].innerHTML= i;
		
	}
	fillA();
	
	if (aCols == 0)
		addColA();
}

function removeRowA()
{
	//if 0 rows, exit
	if (aRows == 0)
		return;
	
	//remove lowest row
	document.getElementById("tableA").deleteRow(aRows - 1);
	
	//decrement number of rows
	aRows--;
}

function addColA()
{
	aCols++;
	//variable used to mess around with corresponding HTML table
	var table = document.getElementById("tableA");
	
	/*
	increments from 0 to number of rows in table
	- for every row in table:
		add a new cell at the end of the row
		set the cell value to its y value (how deep it is)
	*/
		
	for (var i = 0; i < aRows; i++)
	{
		var newCell = table.rows[i].insertCell(-1);
		table.rows[i].cells[aCols - 1].innerHTML= i;
		
	}
	
	fillA();
	
	if (aRows == 0)
		addRowA();
}

function removeColA()
{
	
	
	var allRows = document.getElementById('tableA').rows;
	
	for( var i = 0; i < allRows.length; i++)
	{
		allRows[i].deleteCell(-1);
	}
	
	aCols--;
}



/*
fillA
*/
function fillA()
{
	var table = document.getElementById("tableA");
	for (var i = 0 ; i < table.rows.length; i++)
  {
      //var arr=[];
	  //increments through respective row's cells
      for (var j = 0; j < table.rows[i].cells.length; j++)
      {
		  var newvalue = i * table.rows[i].cells.length + j;
		  table.rows[i].cells[j].innerHTML=arr[newvalue];
      }
  }
}
function addRowB()
{
	bRows++;
	//finds the table element to be added
	var table = document.getElementById("tableB");

	//creates empty <tr> (taBle row) element
	var row = table.insertRow(0);

	for(var i = 0; i < bCols; i++)
	{
		row.insertCell();
		table.rows[0].cells[i].innerHTML= i;
		
	}
	
	if (bCols == 0)
		addColB();
	updateBCells();
}


function removeRowB()
{
	//if 0 rows, exit
	if (bRows == 0)
		return;
	
	//remove lowest row
	document.getElementById("tableB").deleteRow(bRows - 1);
	
	//decrement number of rows
	bRows--;
	updateBCells();
	updateBCells();
}

function addColB()
{
	bCols++;
	//variable used to mess around with corresponding HTML table
	var table = document.getElementById("tableB");
	
	/*
	increments from 0 to number of rows in table
	- for every row in table:
		add a new cell at the end of the row
		set the cell value to its y value (how deep it is)
	*/
		
	for (var i = 0; i < bRows; i++)
	{
		var newCell = table.rows[i].insertCell(-1);
		table.rows[i].cells[bCols - 1].innerHTML= i;
		
	}
	if (bRows == 0)
		addRowB();
	updateBCells();
}

function removeColB()
{
	
	
	var allRows = document.getElementById('tableB').rows;
	
	for( var i = 0; i < allRows.length; i++)
	{
		allRows[i].deleteCell(-1);
	}
	
	bCols--;
	updateBCells();
}


/*
section 2
*/

/*
updateBCells

Purpose: sets values of tableB cells to the respective percent thats been entered by user
*/
function getTextbox()
{
	var cnt = document.getElementById("tableA").rows;
	var count=0;
	document.getElementById("emptypercentage").innerHTML="";
	for(i=0;i<cnt.length;i++)
	{
	  var total_cells =tableA.rows[i].cells.length;
	  count=count+total_cells;

	}
	//gets user input
  var textbox_text=document.getElementById("txtInput").value;
  if (textbox_text == "") 
  {
  	document.getElementById("emptypercentage").innerHTML="Percentage must be filled out!";
    return false;
  } else if(isNaN(textbox_text))
  {
  	document.getElementById("emptypercentage").innerHTML="Percentage must be a number!";
  } 
  else{
    console.log(textbox_text);
    }

	//calculates the percentage of matching elements
  percentage_count=Math.round(count*textbox_text/100);  
  console.log(percentage_count);
  updateBCells();
}



	
	
/*
updates all of the values within the BTable
*/
function updateBCells()
{
	//creates the table variable (based on tableB)
  var tableB=document.getElementById("tableB");
  var max_Count=0;
  var arraylength=0;
	//increments through table row by row
  for (var i = 0 ; i < tableB.rows.length; i++)
  {
      //var arr=[];
	  //increments through respective row's cells
      for (var j = 0; j < tableB.rows[i].cells.length; j++)
      {
		  //checks to see if we are still setting values
        if(max_Count<percentage_count)
        {
			//sets cells value to te respective index in the arraySource
         tableB.rows[i].cells[j].innerHTML=arr[arraylength];
          arraylength=arraylength+1;
          max_Count++;
        }
		 //if that percentage has been reached, set them to some other value
		  else
		  {
			  var newvalue = i * tableB.rows[i].cells.length + j;
			  tableB.rows[i].cells[j].innerHTML=[newvalue];
		  }

      }
  }
}

function searchTables()
{

	//initializes table variable to tableA
	var table=document.getElementById("tableA");
	var count = 0;
	document.getElementById("emptysearch").innerHTML="";
	document.getElementById("error").innerHTML="";
	//term to search for
	var searchTerm=document.getElementById("txtSearch").value;
	 if (searchTerm == "") 
	 {
	 	document.getElementById("emptysearch").innerHTML="Search item must be filled out!";
        return false;
     }
	
	/*
	purpose of loop is to search tableA and tableB
	on second run of loop, tableB will be searched
	*/
	for(var tableNum = 0; tableNum < 2; tableNum++)
	{
		//iterate over every row in table
		for( var i = 0; i < table.rows.length; i++)
		{
			//iterate over every cell/col in row
			for( var j = 0; j< table.rows[i].cells.length; j++)
			{
				//if term matches, change background color of cell to red
				if 	(table.rows[i].cells[j].innerHTML === searchTerm)
				{
					    table.rows[i].cells[j].style.backgroundColor = "red";
					    count = count + 1;
				
				}    
				//if term does not match, reset color
				else 
				{
					table.rows[i].cells[j].style.backgroundColor="";
				}  
				 
			}
		}
		//set table to tableB
		table=document.getElementById("tableB");
	}
	if(count==0)
	{
		console.log(count);
		document.getElementById("error").innerHTML="No search found!";
	}
}

