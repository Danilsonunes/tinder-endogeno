var contenido = document.querySelector('#contenido')
function traer(){
	fetch('https://randomuser.me/api/')
	.then(res => res.json())
	.then(data => {
		console.log(data.results['0'])
		contenido.innerHTML = `
			<img src="${data.results['0'].picture.large}" width="100px">
			<p>Nombre: ${data.results['0'].name.first}</p>
			<p>Apellido: ${data.results['0'].name.last} </p>
			<p>Genero: ${data.results['0'].gender} </p>
			<p>Edad: ${data.results['0'].dob.age}</p>
			<p>Telefono: ${data.results['0'].phone} </p>
			<p>Email: ${data.results['0'].email} </p>
			`
	})
}