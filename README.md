# 🇲🇽 Contador 4.0 SAT México - Guía de Implementación

## 📦 Archivos Incluidos

1. **promptsData-SAT-Mexico.js** - Base de datos con 40 prompts especializados
2. **App-SAT-Mexico.jsx** - Componente principal React
3. **styles-SAT-Mexico.css** - Estilos con tema mexicano

---

## 🚀 Implementación Rápida (5 minutos)

### Paso 1: Estructura del Proyecto

```
tu-proyecto/
├── src/
│   ├── App.js                          ← Reemplazar con App-SAT-Mexico.jsx
│   ├── styles.css                      ← Reemplazar con styles-SAT-Mexico.css
│   └── promptsData-SAT-Mexico.js       ← Agregar este archivo
├── package.json
└── README.md
```

### Paso 2: Reemplazar Archivos

**Opción A: Reemplazo directo**
```bash
# Desde la carpeta raíz de tu proyecto React:
cp App-SAT-Mexico.jsx src/App.js
cp styles-SAT-Mexico.css src/styles.css
cp promptsData-SAT-Mexico.js src/
```

**Opción B: Renombrar archivos actuales (backup)**
```bash
# Guarda tus archivos actuales
mv src/App.js src/App-backup.js
mv src/styles.css src/styles-backup.css

# Copia los nuevos
cp App-SAT-Mexico.jsx src/App.js
cp styles-SAT-Mexico.css src/styles.css
cp promptsData-SAT-Mexico.js src/
```

### Paso 3: Verificar Imports

Asegúrate de que en `src/App.js` la línea de import sea:
```javascript
import promptsData from './promptsData-SAT-Mexico';
```

### Paso 4: Ejecutar

```bash
npm start
# o
yarn start
```

---

## 🎨 Personalización

### Cambiar Colores Principales

Edita las variables CSS en `styles.css`:

```css
:root {
  /* Colores de la bandera mexicana */
  --mexico-green: #006847;    /* Verde bandera */
  --mexico-red: #CE1126;      /* Rojo bandera */
  --accent-color: #FFD700;    /* Dorado para detalles */
}
```

### Modificar Branding

En `App.js`, busca y modifica:

```jsx
<h1>
  <span className="flag-emoji">🇲🇽</span> 
  Contador 4.0 SAT México
</h1>
```

### Cambiar Footer

```jsx
<footer className="app-footer footer-mexico">
  <div className="footer-content">
    <p>
      Tu texto personalizado aquí
    </p>
  </div>
</footer>
```

---

## 📱 Deploy a Vercel

### Método 1: Desde GitHub

1. **Push tu proyecto a GitHub:**
```bash
git add .
git commit -m "Add Contador 4.0 SAT México"
git push origin main
```

2. **En Vercel:**
   - Ve a https://vercel.com
   - Click "New Project"
   - Import tu repositorio
   - Deploy automático ✅

### Método 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy desde la carpeta del proyecto
vercel

# Deploy a producción
vercel --prod
```

### Método 3: Drag & Drop

1. Construye tu proyecto:
```bash
npm run build
```

2. Ve a https://vercel.com/new
3. Arrastra la carpeta `build/` al navegador
4. Deploy instantáneo ✅

---

## ✅ Checklist de Verificación

Antes de deployar, verifica:

- [ ] Los 3 archivos están en `src/`
- [ ] El import de `promptsData-SAT-Mexico` es correcto
- [ ] `npm start` funciona sin errores
- [ ] Se ven las 6 categorías principales
- [ ] Los colores mexicanos se aplican correctamente
- [ ] El highlighting de `[VARIABLES]` funciona
- [ ] El botón "Copiar" funciona
- [ ] Responsive en móvil (prueba con DevTools)

---

## 🎯 Características Implementadas

### ✅ Funcionalidades Principales

- **Navegación de 3 niveles:**
  1. Categorías (6 principales)
  2. Subcategorías
  3. Prompts individuales

- **Highlighting de variables:**
  - Detecta `[VARIABLES]` automáticamente
  - Las resalta en amarillo/dorado
  - Lista variables al final de cada prompt

- **Sistema de copiado:**
  - Copia al portapapeles con un click
  - Feedback visual ("✓ Copiado")

- **Badges y tags:**
  - Tags por prompt (CFDI, ISR, IVA, etc.)
  - Descripción breve de cada prompt

- **Diseño mexicano:**
  - Colores de la bandera 🇲🇽
  - Gradientes verde/blanco/rojo
  - Emojis y branding específico

### 🆕 Mejoras sobre la Versión Original

1. **Detección de variables** - Lista automática de variables a completar
2. **Tags por prompt** - Filtrado visual por tema
3. **Colores por categoría** - Borde lateral con color único
4. **Info box** - Contador de prompts total
5. **Tips específicos México** - Consejos sobre SAT, Anexos, CFDI
6. **Footer expandido** - Información del pack y disclaimer

---

## 📊 Estructura de Datos

### promptsData Schema

```javascript
{
  title: "📄 Facturación Electrónica CFDI",
  icon: "🧾",
  color: "#1e40af",
  subcategories: [
    {
      title: "CFDI 4.0 y Complementos",
      prompts: [
        {
          id: 1,
          title: "Validación de CFDI 4.0",
          description: "Valida cumplimiento con Anexo 20...",
          prompt: "Actúa como especialista...",
          variables: ["DATOS DEL CFDI"],
          category: "facturacion",
          tags: ["CFDI", "Anexo 20", "validación"]
        }
      ]
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Problema: "Module not found: Can't resolve './promptsData-SAT-Mexico'"

**Solución:**
```bash
# Verifica que el archivo existe
ls src/promptsData-SAT-Mexico.js

# Si no existe, cópialo de nuevo
cp promptsData-SAT-Mexico.js src/
```

### Problema: Los colores no se aplican

**Solución:**
```bash
# Verifica que styles.css está importado
# En src/App.js debe estar:
import './styles.css';

# Reconstruye el proyecto
npm start
```

### Problema: Variables no se resaltan

**Solución:**
Verifica que la función `highlightVariables` está activa:
```jsx
<pre 
  className="prompt-content-text"
  dangerouslySetInnerHTML={{ __html: highlightVariables(prompt.prompt) }}
/>
```

---

## 🔄 Actualizaciones Futuras

### Agregar más prompts:

1. Edita `promptsData-SAT-Mexico.js`
2. Agrega nuevo objeto en el array de `prompts`
3. Guarda y recarga

### Crear nueva categoría:

```javascript
{
  "title": "🆕 Nueva Categoría",
  "icon": "🎯",
  "color": "#8b5cf6",
  "subcategories": [
    {
      "title": "Nueva Subcategoría",
      "prompts": [...]
    }
  ]
}
```

---

## 📞 Soporte

**Desarrollado por:** Jairo Amaya - Full Stack Marketer
**Website:** https://jairoamaya.co
**Versión:** 1.0 - México Edition

---

## 📄 Licencia

© 2025 Jairo Amaya. Todos los derechos reservados.

Este pack de prompts es parte del sistema Contador 4.0 y está diseñado específicamente para el mercado mexicano con referencias a SAT, CFDI, y normativa fiscal vigente en México.

---

## 🎉 ¡Listo para Usar!

Tu app Contador 4.0 SAT México está lista para deployar. 

**Próximo paso recomendado:** Deploy a Vercel para tener tu URL pública

```bash
vercel --prod
```

¡Buena suerte! 🚀
