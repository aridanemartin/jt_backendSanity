export default {
  name: "pagePersonalization",
  title: "Personalización de la página",
  type: "document",
  groups: [
    {
      name: "principal",
      title: "Página Principal",
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
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
