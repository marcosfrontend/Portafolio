// Crear el arreglo con los archivos a guardar en la cache y trabajar con ellos ofline
const offline = [
    "/",
    "index.html",
    "js/script.js",
    "estilo.css",
    "css/boxicons.min.css"
]
// Esta funciones nos devuelven una promesa
//  Open: Inteta abrir el cache. Nota si no encuentra el cache lo crea
// Match: Solo busca en especifico la cache
// Keys: Nos devuelve un arreglo con el del nombre de los caches
// Delete: Elimina los caches 

self.addEventListener("install", evento => {
    // La funcion de waitUntill se espera asta que todos los achivos se guarden en el SW
    evento.waitUntil(caches.open("EVND").then(cache =>{
        return cache.addAll(offline)
    }))
})

self.addEventListener("activate", evento => {
//     console.log(evento);
//     // Aqui se actualiza el cache
})

self.addEventListener("fetch", evento => {
//     // Estrategias de cache

//     // 1. Network Only : Trabaja solo si se tiene internet
    
//     // responseWith Responder con
//     // console.log(evento.request.url)
//     // evento.respondWith(
//     //     fetch(evento.request)
//     // )

//     // 2. Cache Only: Trabaja solo con los archivos que estan en la cache
//     // Se lokita a trabajar solo con los archivos de la cache

//     // evento.respondWith(
//     //     caches.match(evento.request)
//     // )

//     //3. Network First : Es la estrategia donde el SW prioriza ir  a internet a buscar los datos ya si no los encuentra se
//     // va a la cache y los devuelve
//     // evento.request: es la peticion del archivo
//     // 
//     // evento.respondWith(
//     //     fetch(evento.request).then(neworkResponse =>{
//     //         return neworkResponse
//     //     }).catch(error =>{
//     //         // Ir al cache a buscar el archivo
//     //         return caches.match(evento.request)


//     //     })
//     // )

//     //cache first
//     // evento.respondWith(
//     //     caches.match(evento.request).then(cacheRespoonse =>{
//     //         return cacheRespoonse
//     //     }).catch(error =>{            
//     //         fetch(evento.request).then(neworkResponse =>{
//     //             return neworkResponse
//     //         })
//     //     })
       
//     // )

})
