# Guía de despliegue en Coolify

## Configuración del proyecto en Coolify

### 1. Crear nuevo recurso en Coolify
1. Ve a tu panel de Coolify en la Raspberry Pi
2. Crea un nuevo recurso de tipo "Application"
3. Selecciona "Public Repository" o conecta tu cuenta de GitHub
4. Usa el repositorio: `https://github.com/[tu-usuario]/[tu-repo]`

### 2. Configuración de variables de entorno
En Coolify, agrega las siguientes variables de entorno:

```
RESEND_API_KEY=tu_api_key_de_resend
NODE_ENV=production
PORT=4321
```

### 3. Configuración del puerto
- **Puerto de la aplicación**: 4321
- **Puerto público**: El que prefieras (ej: 80, 443, o cualquier otro)

### 4. Build & Deploy Settings en Coolify

- **Build Pack**: Dockerfile
- **Dockerfile Location**: `./Dockerfile`
- **Port**: 4321
- **Base Directory**: `/` (raíz del proyecto)

### 5. Healthcheck (Opcional pero recomendado)
```
Healthcheck URL: /
Healthcheck Method: GET
```

### 6. Dominio (Opcional)
Puedes configurar un dominio personalizado en la sección de dominios de Coolify.

## Notas importantes

1. **RESEND_API_KEY**: No olvides configurar esta variable de entorno en Coolify para que el formulario de contacto funcione.

2. **Build time**: La primera construcción puede tardar varios minutos en una Raspberry Pi debido a las limitaciones de recursos.

3. **Arquitectura ARM64**: El Dockerfile está optimizado para Raspberry Pi (ARM64).

4. **Variables de entorno locales**: El archivo `.env.local` NO se incluye en el repositorio por seguridad. Debes configurar las variables directamente en Coolify.

## Comandos útiles para verificar antes del despliegue

```bash
# Probar el build localmente
npm run build

# Verificar que los archivos estén en el repositorio
git status

# Subir cambios a GitHub
git add .
git commit -m "Configuración para despliegue en Coolify"
git push
```

## Troubleshooting

Si el despliegue falla:
1. Verifica los logs en Coolify
2. Asegúrate de que todas las variables de entorno estén configuradas
3. Verifica que el puerto 4321 esté disponible
4. Revisa que el Dockerfile se esté usando correctamente
