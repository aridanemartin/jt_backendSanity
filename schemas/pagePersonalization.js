export default {
  name: "pagePersonalization",
  title: "Personalización de la página",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      group: "ficha",
    },
    //   {
    //     name: "isADoctor",
    //     title: "ATENCIÓN!!!",
    //     description:
    //       "¿Pertenece esta persona al equipo de doctores? (En caso afirmativo será incluída en el apartado de equipo, si es una persona que participa como colaborador del blog pero no es un doctor del equipo mantener apagado).",
    //     type: "boolean",
    //     group: "ficha",
    //     initialValue: false,
    //   },
    //   {
    //     name: "especialidad",
    //     title: "Especialidad",
    //     description:
    //       "Tipo de especialista (Ej: Endocrino, Dietista-Nutricionista...) No superar las dos palabras",
    //     type: "string",
    //     group: "ficha",
    //   },
    //   {
    //     name: "slug",
    //     title: "Slug",
    //     type: "slug",
    //     group: "ficha",
    //     options: {
    //       source: "name",
    //       maxLength: 96,
    //     },
    //   },
    //   {
    //     name: "image",
    //     title: "Image",
    //     type: "image",
    //     group: "ficha",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "bio",
    //     title: "Bio",
    //     type: "array",
    //     group: "ficha",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "web",
    //     title: "Página Web",
    //     description: "Enlace a su página web",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "instagram",
    //     title: "Instagram (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "facebook",
    //     title: "Facebook (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "doctoralia",
    //     title: "Doctoralia (opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "youtube",
    //     title: "Canal de Youtube (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "twitter",
    //     title: "Twitter (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "linkedin",
    //     title: "Linkedin (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "tiktok",
    //     title: "Tik Tok (Opcional)",
    //     type: "string",
    //     group: "social",
    //   },
    //   {
    //     name: "servicio1Image",
    //     title: "Servicio 1 - Imagen",
    //     type: "image",
    //     group: "servicio1",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio1Title",
    //     title: "Servicio 1 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio1",
    //   },
    //   {
    //     name: "servicio1Duration",
    //     title: "Servicio 1 - Duración (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio1",
    //   },
    //   {
    //     name: "servicio1Description",
    //     title: "Servicio 1 - Descripción",
    //     type: "array",
    //     group: "servicio1",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio1Link",
    //     title: "Servicio 1 - Link Calendly",
    //     type: "string",
    //     group: "servicio1",
    //   },
    //   {
    //     name: "servicio1Precio",
    //     title: "Servicio 1 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio1",
    //   },
    //   {
    //     name: "servicio2Image",
    //     title: "Servicio 2 - Imagen",
    //     type: "image",
    //     group: "servicio2",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio2Title",
    //     title: "Servicio 2 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio2",
    //   },
    //   {
    //     name: "servicio2Duration",
    //     title: "Servicio 2 - Duración (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio2",
    //   },
    //   {
    //     name: "servicio2Description",
    //     title: "Servicio 2 - Descripción",
    //     type: "array",
    //     group: "servicio2",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio2Link",
    //     title: "Servicio 2 - Link Calendly",
    //     type: "string",
    //     group: "servicio2",
    //   },
    //   {
    //     name: "servicio2Precio",
    //     title: "Servicio 2 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio2",
    //   },
    //   {
    //     name: "servicio3Image",
    //     title: "Servicio 3 - Imagen",
    //     type: "image",
    //     group: "servicio3",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio3Title",
    //     title: "servicio 3 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio3",
    //   },
    //   {
    //     name: "servicio3Duration",
    //     title: "Servicio 3 - Duración (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio3",
    //   },
    //   {
    //     name: "servicio3Description",
    //     title: "Servicio 3 - Descripción",
    //     type: "array",
    //     group: "servicio3",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio3Link",
    //     title: "servicio 3 - Link Calendly",
    //     type: "string",
    //     group: "servicio3",
    //   },
    //   {
    //     name: "servicio3Precio",
    //     title: "servicio 3 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio3",
    //   },
    //   {
    //     name: "servicio4Image",
    //     title: "Servicio 4 - Imagen",
    //     type: "image",
    //     group: "servicio4",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio4Title",
    //     title: "Servicio 4 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio4",
    //   },
    //   {
    //     name: "servicio4Duration",
    //     title: "Servicio 4 - Duración (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio4",
    //   },
    //   {
    //     name: "servicio4Description",
    //     title: "Servicio 4 - Descripción",
    //     type: "array",
    //     group: "servicio4",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio4Link",
    //     title: "Servicio 4 - Link Calendly",
    //     type: "string",
    //     group: "servicio4",
    //   },
    //   {
    //     name: "servicio4Precio",
    //     title: "Servicio 4 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio4",
    //   },
    //   {
    //     name: "servicio5Image",
    //     title: "Servicio 5 - Imagen",
    //     type: "image",
    //     group: "servicio5",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio5Title",
    //     title: "Servicio 5 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio5",
    //   },
    //   {
    //     name: "servicio5Duration",
    //     title:
    //       "Servicio 5 - Duración en minutos (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio5",
    //   },
    //   {
    //     name: "servicio5Description",
    //     title: "Servicio 5 - Descripción",
    //     type: "array",
    //     group: "servicio5",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio5Link",
    //     title: "Servicio 5 - Link Calendly",
    //     type: "string",
    //     group: "servicio5",
    //   },
    //   {
    //     name: "servicio5Precio",
    //     title: "Servicio 5 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio5",
    //   },
    //   {
    //     name: "servicio6Image",
    //     title: "Servicio 6 - Imagen",
    //     type: "image",
    //     group: "servicio6",
    //     options: {
    //       hotspot: true,
    //     },
    //   },
    //   {
    //     name: "servicio6Title",
    //     title: "Servicio 6 - Título que aparecerá",
    //     type: "string",
    //     group: "servicio6",
    //   },
    //   {
    //     name: "servicio6Duration",
    //     title:
    //       "Servicio 6 - Duración en minutos (Escribir solo el número de minutos)",
    //     type: "string",
    //     group: "servicio6",
    //   },
    //   {
    //     name: "servicio6Description",
    //     title: "Servicio 6 - Descripción",
    //     type: "array",
    //     group: "servicio6",
    //     of: [{ type: "block" }],
    //   },
    //   {
    //     name: "servicio6Link",
    //     title: "Servicio 6 - Link Calendly",
    //     type: "string",
    //     group: "servicio6",
    //   },
    //   {
    //     name: "servicio6Precio",
    //     title: "Servicio 6 - Precio en € (Escribir solo el número)",
    //     type: "number",
    //     group: "servicio6",
    //   },
    //   {
    //     name: "comentario1",
    //     title: "Comentario 1",
    //     type: "array",
    //     of: [
    //       {
    //         title: "Block",
    //         type: "block",
    //         styles: [{ title: "Normal", value: "normal" }],
    //         lists: [],
    //       },
    //     ],
    //   },
    //   {
    //     name: "comentario1autor",
    //     title: "Autor del comentario 1",
    //     type: "string",
    //   },
    //   {
    //     name: "comentario1fuente",
    //     title: "Fuente del comentario 1.",
    //     description:
    //       'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
    //     type: "string",
    //   },
    //   {
    //     name: "comentario2",
    //     title: "Comentario 2",
    //     type: "array",
    //     of: [
    //       {
    //         title: "Block",
    //         type: "block",
    //         styles: [{ title: "Normal", value: "normal" }],
    //         lists: [],
    //       },
    //     ],
    //   },
    //   {
    //     name: "comentario2autor",
    //     title: "Autor del comentario 2",
    //     type: "string",
    //   },
    //   {
    //     name: "comentario2fuente",
    //     title: "Fuente del comentario 2.",
    //     description:
    //       'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
    //     type: "string",
    //   },
    //   {
    //     name: "comentario3",
    //     title: "Comentario 3",
    //     type: "array",
    //     of: [
    //       {
    //         title: "Block",
    //         type: "block",
    //         styles: [{ title: "Normal", value: "normal" }],
    //         lists: [],
    //       },
    //     ],
    //   },
    //   {
    //     name: "comentario3autor",
    //     title: "Autor del comentario 3",
    //     type: "string",
    //   },
    //   {
    //     name: "comentario3fuente",
    //     title: "Fuente del comentario 3.",
    //     description:
    //       'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
    //     type: "string",
    //   },
    //   {
    //     name: "comentario4",
    //     title: "Comentario 4",
    //     type: "array",
    //     of: [
    //       {
    //         title: "Block",
    //         type: "block",
    //         styles: [{ title: "Normal", value: "normal" }],
    //         lists: [],
    //       },
    //     ],
    //   },
    //   {
    //     name: "comentario4autor",
    //     title: "Autor del comentario 4",
    //     type: "string",
    //   },
    //   {
    //     name: "comentario4fuente",
    //     title: "Fuente del comentario 4.",
    //     description:
    //       'Recuerde que irá precedido de la frase "Extraído de" (Doctoralia, Facebook, Instagram...)',
    //     type: "string",
    //   },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
