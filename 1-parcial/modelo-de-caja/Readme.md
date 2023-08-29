# El modelo de caja

**Todo en CSS tiene una caja alrededor**, y comprender estas cajas es clave para poder crear diseños con CSS o para
alinear elementos con otros elementos. 📦

## Cajas en bloque y en línea

En CSS, en general, hay dos tipos de cajas: **cajas en bloque** y **cajas en línea**. Estas características se refieren
al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página:

Si una caja se define como un **bloque**, se comportará de las maneras siguientes:

- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor.
- Se respetan las propiedades width y height.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

Si una caja tiene una visualización externa de tipo **inline**, entonces:

- La caja no fuerza ningún salto de línea al llegar al final de la línea.
- Las propiedades width y height no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

## Partes de una caja

![Modelo de caja](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model/box-model-devtools.png)

Al hacer una caja de tipo bloque en CSS tenemos los elementos siguientes:

1. **El contenido de la caja (o content box):** El área donde se muestra el contenido, cuyo tamaño puede cambiarse
   utilizando propiedades como width y height.
2. **El relleno de la caja (o padding box):** El relleno es espacio en blanco alrededor del contenido; es posible
   controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
3. **El borde de la caja (o border box):** El borde de la caja envuelve el contenido y el relleno. Es posible controlar
   su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
4. **El margen de la caja (o margin box):** El margen es la capa más externa. Envuelve el contenido, el relleno y el
   borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad
   margin y otras propiedades relacionadas.

## Display

- **Block:** El elemento genera un cuadro de elemento de bloque.
- **Inline:** El elemento genera uno o más cuadros de elemento en línea.
- **run-in:** El elemento genera un cuadro de ejecución. Los elementos de ejecución actúan como líneas o bloques,
  dependiendo de los elementos circundantes.
- **Flow:** El elemento expone su contenido utilizando el diseño de flujo (diseño en bloque y en línea).
- **flow-root:** El elemento genera un cuadro de elemento de bloque que establece un nuevo contexto de formato de
  bloque.
- **table:** Estos elementos se comportan como elementos HTML &lt;table&gt;. Define un cuadro de nivel de bloque.
- **Flex:** El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de
  flexbox.
- **Grid:** El elemento se comporta como un elemento de bloque y establece su contenido de acuerdo con el modelo de
  cuadrícula.
- **Subgrid:** Si el elemento padre tiene display:grid, el elemento en sí y su contenido se establecen de acuerdo con el
  modelo de cuadrícula.
- **Ruby:** El elemento se comporta como un elemento en línea y establece su contenido de acuerdo con el modelo de
  formato ruby.
- **inline-block:** El elemento genera una caja de elemento de bloque que fluye con el contenido circundante como si
  fuera una sola caja en línea (comportándose como un elemento reemplazado).
- **inline-table:** El valor inline-table no tiene una asignación directa en HTML. Se comporta como un elemento HTML
  &lt;table&gt;, pero como un cuadro en línea.
- **inline-flex:** El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el
  modelo flexbox.
- **inline-grid:** El elemento se comporta como un elemento en línea y se establece su contenido de acuerdo con el
  modelo de cuadrícula.

