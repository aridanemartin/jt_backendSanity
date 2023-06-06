export default {
  name: "pagePersonalization",
  title: "Personalización de la página",
  type: "document",
  groups: [
    {
      name: "principal",
      title: "Página Principal",
    },
    {
      name: "contact",
      title: "Página de contacto",
    },
  ],
  fields: [
    {
      name: "name",
      title: "Sección",
      type: "string",
    },
    {
      title: "Banner de publicidad (Opcional)",
      name: "adbanner",
      type: "object",
      group: "principal",
      options: {
        collapsible: true,
        collapsed: false,
        modal: { type: "popover" },
      },
      fields: [
        {
          name: "active",
          type: "boolean",
          title: "Activación del banner",
          description:
            "Si está activado, se mostrará el banner. Compruebe primero que todos los campos estén rellenos",
        },
        {
          name: "title",
          type: "string",
          title: "Título del Banner",
        },
        {
          name: "description",
          type: "text",
          title: "Descripción",
        },
        { name: "linkText", type: "string", title: "Texto del botón" },
        { name: "link", type: "string", title: "Link al que lleva el botón" },
        {
          name: "image",
          title: "Fondo del Banner",
          description:
            "Recuerda que la imagen debe ser alargada y no cuadrada y no deberá contener texto, después de subirla recuerda comprobar que se vea bien tanto en móvil como en desktop",
          type: "image",

          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: "Imágen de la presentación",
      description:
        "Imagen que se mostrará en la sección de presentación que se encuentra justo debajo del banner principal",
      name: "introImage",
      type: "object",
      group: "principal",
      options: {
        collapsible: true,
        collapsed: false,
        modal: { type: "popover" },
      },
      fields: [
        {
          name: "imageDesktop",
          title: "Imagen para la versión de escritorio",
          description:
            "Recuerda que la imagen debe ser alargada y no cuadrada y no deberá contener texto, después de subirla recuerda comprobar que se vea bien tanto en móvil como en desktop",
          type: "image",

          options: {
            hotspot: true,
          },
        },
        {
          name: "imageMobile",
          title: "Imagen para la versión móvil",
          description:
            "Recuerda que la imagen debe ser alargada y no cuadrada y no deberá contener texto, después de subirla recuerda comprobar que se vea bien tanto en móvil como en desktop",
          type: "image",

          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: "Dirección de consulta",
      name: "address",
      type: "object",
      group: "contact",
      options: {
        collapsible: true,
        collapsed: false,
        modal: { type: "popover" },
      },
      fields: [
        {
          name: "address1",
          type: "string",
          title: "Dirección (Calle)",
          required: true,
        },
        {
          name: "address2",
          type: "string",
          title: "Planta, puerta...",
          required: true,
        },
        {
          name: "providence",
          type: "string",
          title: "Provincia",
          required: true,
        },
        {
          name: "zipCode",
          type: "string",
          title: "Código Postal",
          required: true,
        },
        {
          name: "phone",
          type: "string",
          title: "Teléfono",
        },
        {
          name: "mail",
          type: "string",
          title: "Email",
        },
      ],
    },
    {
      title: "Sección 'Trabaja con nosotros'",
      name: "workWithUs",
      type: "object",
      group: "contact",
      options: {
        collapsible: true,
        collapsed: false,
        modal: { type: "popover" },
      },
      fields: [
        {
          title: "Activar el botón 'Trabaja con nosotros'",
          name: "isWorkWithUsEnabled",
          type: "boolean",
        },
        {
          title: "Email de contacto",
          name: "workWithUsEmail",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
