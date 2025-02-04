# Proyecto TFG DAM - VETCARE

### 1. Introducción
Este proyeto se ha desarrollado como proyecto final de ciclo de la Formación Profesional: Desarrollo en Aplicaciones Multiplataforma. 

La idea del proyecto era crear una web de administración para una clínica veterinaria. La web tiene varios propósitos: 
  \- Servir de portal informativo y presencia en la web de la clínica. 
  
  \- Servir de portal para los clientes. Los clientes con usuario y contraseña registrados por un veterinario podran acceder a su página privada donde encontrarán su perfil de usuario, que podrán modificar, las mascotas a su nombre. De las mascotas podrá acceder al perdil de las mismas y ver la información, las citas y los tratamientos que se le han aplicado. Por otra parte podrán agendar citas y eliminarlas. 
  
  \- Servir de portal para los trabajadores. En este caso los veterinarios podrán tener dos roles que se apilan. Es decir, todos tendrán acceso como veterinarios pero solo los indicados podrán acceder al panel de administración. El veterinario no administrador podrá manejar todo lo del cliente además de añadir clientes, añadir mascotas y añadir tratamientos a la mascota. También podrán visulizar la información en forma de tablas. El veterinario administrados tendrá, además, acceso al panel de administración donde podrá dar de alta nuevos trabajadores (veterinarios), editar su información y borrarlos del sistema. 

### 2. Desarrollo Técnico

La aplicación se ha creado usando **Node.js** y **Sequelize**. La base de datos es **MySQL**. 

El despliegue de la aplicación está hecho en **Netlify** para la parte de frontend y **Railway** para el backend y la base de datos. 

### 3. Demo de la app

[Link](https://vetcare-prod.netlify.app/ "Link a la app")
