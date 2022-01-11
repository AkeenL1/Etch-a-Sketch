const container = document.getElementById("container");
let randomColor = Math.floor(Math.random()*16777215).toString(16);
function createGrid(rows,columns)
{
	container.style.setProperty('--grid-rows',rows);
	container.style.setProperty('--grid-cols',columns);
	for(let i = 0;i<(rows*columns);i++)
	{
		let cell = document.createElement('div');
		container.appendChild(cell).className = "cell";
		cell.addEventListener("mouseover",(event) =>
		{
			randomColor = Math.floor(Math.random()*16777215).toString(16);
			event.target.style.backgroundColor = "#"+randomColor;

		});

	}
}


createGrid(100,100);

const btn = document.querySelector('button');
btn.addEventListener('click',() =>
{
	let cells = document.getElementsByClassName('cell');
	for(let i = 0;i<cells.length;i++)
	{
		cells[i].style.backgroundColor = "white";
	}
	let input = prompt("input new grid size must be <= 100",16);
	while(input > 100)
	{
		input = prompt("input new grid size must be <= 100",16);
		if(input > 100)
		{
			continue;
		}
	}
	if(input<1)
	{
		input = 16;
	}
	createGrid(input,input);
})