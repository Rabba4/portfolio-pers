# Guía de despliegue en Coolify

## Método recomendado: Docker Image pre-construida (Recomendado para Raspberry Pi)

Este método usa GitHub Actions para construir la imagen Docker en servidores potentes y luego Coolify solo descarga la imagen lista. **Ideal para hardware limitado**.

### 1. Activar GitHub Actions (solo primera vez)

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Actions** → **General**
3. En "Workflow permissions", selecciona **Read and write permissions**
4. Guarda los cambios

### 2. Verificar que la imagen se construyó

1. Cada vez que hagas `git push` a la rama `main`, GitHub Actions construirá la imagen automáticamente
2. Ve a la pestaña **Actions** en tu repositorio para ver el progreso
3. Una vez completado, la imagen estará disponible en `ghcr.io/rabba4/portfolio-pers:latest`

### 3. Configurar Coolify para usar la imagen pre-construida

En Coolify:

1. Crea un nuevo recurso de tipo **"Docker Image"** (NO "Application from Git")
2. Configura:
   - **Image**: `ghcr.io/rabba4/portfolio-pers:latest`
   - **Port**: `4321`
   - **Pull latest**: Activado (para actualizar automáticamente)

3. **Variables de entorno** (en la sección Environment):
   ```
   RESEND_API_KEY=tu_api_key_de_resend
   NODE_ENV=production
   PORT=4321
   ```

4. Guarda y despliega

### 4. Actualizaciones automáticas

Cada vez que hagas `git push`:
1. GitHub Actions construirá la nueva imagen
2. En Coolify, ve al recurso y haz clic en **"Redeploy"** para descargar la última versión

---

## Método alternativo: Build en Coolify (No recomendado para Raspberry Pi)

⚠️ **Advertencia**: Este método puede fallar por falta de recursos en Raspberry Pi.

### 1. Crear nuevo recurso en Coolify
1. Ve a tu panel de Coolify en la Raspberry Pi
2. Crea un nuevo recurso de tipo "Application"
3. Selecciona "Public Repository" o conecta tu cuenta de GitHub
4. Usa el repositorio: `https://github.com/Rabba4/portfolio-pers`

### 2. Configuración de variables de entorno

En Coolify, agrega las siguientes variables de entorno:

```
RESEND_API_KEY=tu_api_key_de_resend
NODE_ENV=production
PORT=4321
```

### 3. Build & Deploy Settings en Coolify

- **Build Pack**: Dockerfile
- **Dockerfile Location**: `./Dockerfile`
- **Port**: 4321
- **Base Directory**: `/` (raíz del proyecto)

---

## Uso de Docker Compose (Alternativa)

También puedes usar el archivo `docker-compose.yml` incluido:

```bash
# En tu Raspberry Pi
git clone https://github.com/Rabba4/portfolio-pers.git
cd portfolio-pers

# Configurar variable de entorno
export RESEND_API_KEY=tu_api_key_real

# Iniciar
docker-compose up -d
```

---

## Notas importantes

1. **RESEND_API_KEY**: Esta variable es obligatoria para el formulario de contacto.

2. **Arquitectura ARM64**: La imagen se construye específicamente para Raspberry Pi.

3. **GitHub Container Registry**: Las imágenes son públicas por defecto. Si quieres hacerlas privadas, configúralo en GitHub.

4. **Healthcheck**: La aplicación expone el puerto 4321 y responde en `/`

## Troubleshooting

### La imagen no se construye en GitHub Actions
- Verifica que los permisos de Actions estén configurados (paso 1)
- Revisa los logs en la pestaña Actions del repositorio

### Coolify no puede descargar la imagen
- Asegúrate de que la imagen sea pública en GitHub Packages
- Verifica la URL de la imagen: `ghcr.io/rabba4/portfolio-pers:latest`

### El contenedor no inicia
- Verifica que `RESEND_API_KEY` esté configurado
- Revisa los logs del contenedor en Coolify

