/*---------------------FUNÇÃO MOSTRAR/OCULTAR RESPOSTAS-------------------*/

function mostrar(id)
{
	if (document.getElementById(id).style.display == 'block')
	{
		document.getElementById(id).style.display = 'none';
	}
	else 
	{ 
		document.getElementById(id).style.display = 'block';
	}
}


