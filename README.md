# SpendWyze 💸

SpendWyze es una aplicación de gestión financiera personal construida con Next.js, Zustand y Firebase. Proporciona una forma simple e intuitiva de rastrear tus ingresos y gastos, permitiéndote mantener una visión clara de tus actividades financieras. Con SpendWyze, puedes registrar fácilmente transacciones, categorizarlas y ver tu saldo actual.

## Características 🚀

- **Autenticación de Usuario:** SpendWyze utiliza Firebase para la autenticación de usuarios, garantizando un proceso de inicio de sesión y registro seguro y confiable.

- **Gestión de Transacciones:** Lleva un registro de tus transacciones financieras registrando ingresos y gastos. Cada transacción puede ser categorizada con un tipo y acompañada de una descripción para una mejor organización.

- **Tipos de Transacciones:** SpendWyze admite una variedad de tipos de transacciones, facilitando la diferenciación entre diferentes tipos de actividades financieras. Tipos comunes incluyen ingresos, compras de alimentos, servicios públicos, entretenimiento y más.

- **Resumen de Saldo:** Obtén una rápida visión de tu situación financiera actual con la función de saldo de SpendWyze. Observa tus ingresos totales, gastos totales y el saldo resultante de un vistazo.

- **Integración con Firebase:** SpendWyze se integra perfectamente con Firebase, lo que te permite almacenar tus transacciones de manera segura en Firestore. Esto asegura que tus datos financieros sean persistentes y accesibles en todos tus dispositivos.

# Empezando 🛠️

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-nombre-de-usuario/spendwyze.git
    cd spendwyze
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura Firebase:**

   - Crea un nuevo proyecto en Firebase en la [Consola de Firebase](https://console.firebase.google.com/).
   - Obtiene tu configuración de Firebase y reemplaza los marcadores de posición en `src/firebase/config.js` con tu configuración real.

4. **Ejecuta la aplicación:**

    ```bash
    npm run dev
    ```

   Visita [http://localhost:3000](http://localhost:3000) en tu navegador para empezar a usar SpendWyze.

# Planes Futuros 🚧

1. **Integración con Firestore**: Implementaremos la funcionalidad necesaria para almacenar transacciones directamente en Firestore. Esto permitirá una experiencia de datos fluida y en tiempo real para los usuarios de SpendWyze.

2. **Presupuesto**: Introduciremos funciones de presupuesto para ayudar a los usuarios a establecer metas financieras. Con esta característica, podrán hacer un seguimiento de su progreso a lo largo del tiempo, facilitando la gestión de sus finanzas de manera más efectiva.

3. **Visualización de Datos**: Incorporaremos gráficos y tablas para visualizar patrones y tendencias de gastos. Esta mejora proporcionará a los usuarios una comprensión más clara de sus hábitos financieros, permitiéndoles tomar decisiones informadas.

# Contribuciones 🤝

¡Las contribuciones son bienvenidas! Siéntete libre de:

- Abrir problemas si encuentras algún error o tienes sugerencias.
- Enviar solicitudes de extracción para implementar nuevas funciones o corregir problemas existentes.
- Proporcionar comentarios para ayudar a mejorar SpendWyze. Tu participación es fundamental para hacer de esta aplicación una herramienta aún mejor para la gestión financiera personal. ¡Gracias por contribuir!

