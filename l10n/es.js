OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "La petición ha fallado, conexión de red no disponible.",
    "Request unauthorized. Are you logged in?" : "Petición no autorizada, ¿te has identificado?",
    "Request forbidden. Are you an admin?" : "Petición prohibida. ¿Eres el administrador?",
    "Token expired or app not enabled! Reload the page!" : "¡Sesión expirada o aplicación no habilitada! ¡Vuelve a cargar la página!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "¡Error interno del servidor! ¡Por favor, comprueba el archivo data/nextcloud.log para mas información!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "¡Petición fallida! Nexcloud está actualmente en modo mantenimiento.",
    "Feed contains invalid XML" : "La fuente contiene XML inválido",
    "Feed not found: Either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Fuente no encontrada: o bien la página web no proporciona una fuente o bloquea el acceso. Para descartar el bloqueo, intente descargar la fuente en la línea de comandos del servidor utilizando curl: curl",
    "Detected feed format is not supported" : "El formato de fuente detectado no está soportado",
    "Website not found" : "Sitio web no encontrado",
    "More redirects than allowed, aborting" : "Hay más redirecciones que el máximo permitido, cancelando",
    "Bigger than maximum allowed size" : "Mayor tamaño que el máximo permitido",
    "Request timed out" : "Tiempo de espera agotado",
    "Required credentials for feed were either missing or incorrect" : "Faltan las credenciales requeridas para la fuente o son incorrectas",
    "Forbidden to access feed" : "Prohibido acceder a la fuente",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Error de certificado: Ha ocurrido un error en la negociación SSL/TLS. Puede ser el certificado (formato del archivo, ruta, permisos), la contraseña u otras cosas.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Error de certificado: La firma MD5 de SSH o del certificado remoto SSL no es correcta.",
    "Certificate error: Problem with the local client certificate." : "Error de certificado: Problemas con el cliente del certificado local.",
    "Certificate error: Couldn't use specified cipher." : "Error de certificado: No se ha podido utilizar el cifrado especificado.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Error de certificado: el certificado de par no se ha ha podido autentificar con los certificados CA conocidos. ",
    "Certificate error: Requested FTP SSL level failed." : "Error de certificado: el nivel solicitado de FTP SSL ha fallado.",
    "Certificate error: Initiating the SSL engine failed." : "Error de certificado: ha fallado la inicialización del motor SSL.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Error de certificado: Problemas leyendo el certificado SSL CA (¿ubicación? ¿autorización de acceso?)",
    "Certificate error: Issuer check failed" : "Error de certificado: la comprobación del emisor ha fallado ",
    "Unknown SSL certificate error!" : "Error de certificado SSL desconocido.",
    "Can not add feed: Exists already" : "No se puede agregar fuente: ya existe",
    "Articles without feed" : "Artículos sin fuente",
    "Can not add folder: Exists already" : "No se puede agregar la carpeta: ya existe",
    "News" : "Noticias",
    "An RSS/Atom feed reader" : "Un lector de feeds RSS/Atom",
    "Use system cron for updates" : "Usa el cron del sistema para las actualizaciones",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Deshabilita esto si ejecutas un actualizador personalizado como el actualizador Python incluido en la aplicación",
    "Purge interval" : "Intervalo de purgamiento",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Número mínimo de segundos antes de que las fuentes y carpetas eliminadas sean eliminadas definitivamente de la base de datos; valores por debajo de 60 segundos serán ignorados.",
    "Maximum read count per feed" : "Máximo número de lecturas por fuente",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Define la cantidad máxima de artículos que se pueden leer por fuente que no serán borrados por el trabajo de limpieza; si vuelven a aparecer artículos viejos después que los hayas leído, aumenta este valor. Valores negativos, como -1, desactivarán esta caraterística",
    "Maximum redirects" : "Máximo de redirecciones",
    "How many redirects the feed fetcher should follow" : "¿Cuántas redirecciones debería soportar el descargador de fuentes?",
    "Maximum feed page size" : "Máximo tamaño de página de la fuente",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Máximo tamaño de la fuente en bytes. Si la página RSS/Atom es más grande que este valor, la actualización será cancelada",
    "Feed fetcher timeout" : "Tiempo de espera agotado para la descarga de la fuente",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Número máximo de segundos para esperar a que cargue una fuente de RSS o Atom; si toma más tiempo, la actualización será cancelada.",
    "Explore Service URL" : "Explorar URL del Servicio",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "En caso de haberse rellenado, la URL de este servicio será consultada para mostrar los \"feeds\" de la sección explorar feeds. Para volver al servicio de exploración integrado, deje este campo vacío",
    "For more information check the wiki" : "Para más información, comprueba la wiki",
    "Saved" : "Guardado",
    "Download" : "Descargar",
    "Close" : "Cerrar",
    "filter" : "filtro",
    "Language" : "Idioma",
    "Subscribe" : "Suscribirse",
    "Got more awesome feeds? Share them with us!" : "¿Tienes otras fuentes emocionantes? ¡Compártelas con nuestro equipo!",
    "No articles available" : "No hay artículos disponibles",
    "No unread articles available" : "No hay artículos leídos disponibles",
    "Open website" : "Abrir página web",
    "Star article" : "Añadir artículo a favoritos",
    "Unstar article" : "Quitar artículo de favoritos",
    "Keep article unread" : "Mantener el artículo como no-leído.",
    "Remove keep article unread" : "Elimina mantener el artículo como no-leído.",
    "by" : "por",
    "from" : "de",
    "Play audio" : "Reproducir audio",
    "Download video" : "Descargar vídeo",
    "Download audio" : "Descargar audio",
    "Keyboard shortcut" : "Atajo de teclado",
    "Description" : "Descripción",
    "right" : "derecha",
    "Jump to next article" : "Ir al artículo siguiente",
    "left" : "izquierda",
    "Jump to previous article" : "Ir al artículo anterior",
    "Toggle star article" : "Marcar como favorito",
    "Star article and jump to next one" : "Marcar como favorito e ir al siguiente",
    "Toggle keep current article unread" : "Marcar como no leído",
    "Open article in new tab" : "Abrir artículo en una nueva pestaña",
    "Toggle expand article in compact view" : "Expandir artículo en vista compacta",
    "Refresh" : "Actualizar",
    "Load next feed" : "Cargar fuente siguiente",
    "Load previous feed" : "Cargar fuente anterior",
    "Load next folder" : "Cargar carpeta siguiente",
    "Load previous folder" : "Cargar carpeta anterior",
    "Scroll to active navigation entry" : "Desplácese hasta la entrada de navegación activa",
    "Focus search field" : "Poner el cursor en el campo de búsqueda",
    "Mark current article's feed/folder read" : "Marcar los articulos actuales de la fuente/carpeta como leídos",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "¡Detectado modo Ajax o webcron! ¡Tus fuentes no se actualizarán!",
    "How to set up the operating system cron" : "Cómo configurar el cron del sistema operativo",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Instala y configura un actualizador paralelo más rápido que utiliza la API de actualización de la app News",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "¡No se ha detectado codificación de caracteres UTF-8 para la base de datos MySQL/MariaDB!",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "Aprende cómo convertir tu base de datos a ut8mb4 (haz antes una copia de seguridad)",
    "Web address" : "Dirección web",
    "Feed exists already!" : "Esa fuente ya existe.",
    "Folder" : "Carpeta",
    "No folder" : "Sin carpeta",
    "New folder" : "Nueva carpeta",
    "Folder name" : "Nombre de la carpeta",
    "Go back" : "Atrás",
    "Folder exists already!" : "¡La carpeta ya existe!",
    "Advanced settings" : "Configuración avanzada",
    "Credentials" : "Credenciales",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "¡Las credenciales para HTTP Basic Auth deben estar guardadas sin cifrar! ¡Cualquiera con acceso al servidor puede acceder a ellas!",
    "Username" : "Nombre de usuario",
    "Password" : "Contraseña",
    "New Folder" : "Nueva carpeta",
    "Create" : "Crear",
    "Explore" : "Explorar",
    "Update failed more than 50 times" : "La actualización ha fallado más de 50 veces",
    "Deleted feed" : "Eliminar fuente",
    "Undo delete feed" : "Deshacer eliminar fuente",
    "Rename" : "Renombrar",
    "Menu" : "Menú",
    "Mark read" : "Marcar como leído",
    "Unpin from top" : "Soltar de arriba",
    "Pin to top" : "Fijar arriba",
    "Newest first" : "Más nuevos primero",
    "Oldest first" : "Más viejos primero",
    "Default order" : "Orden por defecto",
    "Enable full text" : "Habilitar texto completo",
    "Disable full text" : "Deshabilitar texto completo",
    "Unread updated" : "Artículos sin leer actualizados",
    "Ignore updated" : "Ignorar los actualizados",
    "Open feed URL" : "Abrir URL de la fuente",
    "Delete" : "Eliminar",
    "Dismiss" : "Descartar",
    "Collapse" : "Colapsar",
    "Deleted folder" : "Carpeta eliminada",
    "Undo delete folder" : "Deshacer eliminar carpeta",
    "Starred" : "Favoritos",
    "Unread articles" : "Artículos sin leer",
    "All articles" : "Todos los artículos",
    "Settings" : "Ajustes",
    "Disable mark read through scrolling" : "Deshabilitar marca de lectura mientras se desplaza",
    "Compact view" : "Vista compacta",
    "Expand articles on key navigation" : "Expandir los artículos al navegar con teclas",
    "Show all articles" : "Mostrar todos los artículos",
    "Reverse ordering (oldest on top)" : "Ordenación inversa (la más antigua en la parte superior)",
    "Subscriptions (OPML)" : "Suscripciones (OPML)",
    "Import" : "Importar",
    "Export" : "Exportar",
    "Error when importing: File does not contain valid OPML" : "Error al importar: el archivo no contiene un OPML válido",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Error al importar: el OPML no contiene fuentes ni carpetas",
    "Unread/Starred Articles" : "Artículos no leídos y favoritos",
    "Error when importing: file does not contain valid JSON" : "Error al importar: el archivo no contiene JSON válido",
    "Help" : "Ayuda",
    "Keyboard shortcuts" : "Atajos de teclado",
    "Documentation" : "Documentación",
    "Report a bug" : "Notificar un error"
},
"nplurals=2; plural=(n != 1);");
