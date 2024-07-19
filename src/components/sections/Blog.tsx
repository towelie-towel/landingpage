'use client'
import { Box, Heading, Flex, Text, Badge, Select, Button, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { capitalizeFirstLetter } from '@/utils';

export const blogs = [
    {
        slug: "quienes_somos",
        author: "josué",
        datetime: "2024-05-24T16:45:24.000Z",
        title: "¿Quiénes somos? Descubre las ventajas de trabajar con NOX Creation",
        description: "¡Bienvenidos a NOX CREATION! Somos un equipo de jóvenes apasionados por el desarrollo de software. Con más de 5 años de experiencia, estamos listos para llevar tus ideas al siguiente nivel. ¿Tienes un proyecto en mente? Conozca más sobre quienes somos y en qué le podemos ayudar.",
        tags: ["customers", "design", "web"],
        img: 'https://contenido.noxcreation.dev/uploads/publicacion_1_18695b9f0d.jpg',
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/publicacion_1_18695b9f0d.jpg") center center / cover no-repeat',
        html: `<p>¡Hola y bienvenidos a <strong>NOX Creation</strong>! Somos un equipo de jóvenes entusiastas que viven y respiran tecnología. Con más de 5 años de experiencia en el campo, hemos perfeccionado nuestras habilidades para transformar tus ideas en soluciones digitales de vanguardia. ¿Tienes un proyecto en mente? ¡Estamos emocionados de escucharlo! 🚀</p><p>En <strong>NOX Creation</strong>, no creemos en las soluciones de talla única. Sabemos que cada negocio es único y merece una solución de software que refleje su individualidad. Ya sea que seas un emprendedor en Cuba o en cualquier parte del mundo, estamos aquí para ayudarte a destacar en el mundo digital y a crecer más allá de tus expectativas. ¡No esperes más, contáctanos hoy! 💻<br>&nbsp;</p><h1><strong>¿Por qué trabajar con nosotros?</strong></h1><h3>&nbsp;</h3><h3><strong>Presencia en línea</strong></h3><p><img alt="pexels-canvastudio-3194524.jpg" src="https://contenido.noxcreation.dev/uploads/pexels_canvastudio_3194524_415ff9f577.jpg"></p><p>En la era digital, tener una presencia en línea es más que una necesidad, es una oportunidad. Una página web bien diseñada puede ser la primera impresión que un cliente potencial tiene de tu negocio. En <strong>NOX Creation</strong>, nos especializamos en crear páginas web atractivas y funcionales que reflejen la identidad única de tu negocio.</p><p>Además, una presencia en línea efectiva puede aumentar tu visibilidad y alcanzar a un público más amplio. Ya no estás limitado a tu ubicación geográfica; tu negocio puede llegar a clientes potenciales en todo el mundo. Esto puede abrir nuevas oportunidades y permitirte expandir tu negocio de formas que antes no eran posibles.</p><p>Finalmente, una presencia en línea también puede mejorar la experiencia del cliente. Los clientes pueden acceder a información sobre tu negocio, productos o servicios a cualquier hora y desde cualquier lugar. Esto no solo es conveniente para ellos, sino que también puede liberar tiempo para que te concentres en otras áreas de tu negocio.</p><p>&nbsp;</p><h3><strong>Automatización de procesos</strong></h3><p><img alt="pexels-canvastudio-3194518.jpg" src="https://contenido.noxcreation.dev/uploads/pexels_canvastudio_3194518_1b04f0d25c.jpg"></p><p>La automatización de procesos puede ser un cambio de juego para cualquier negocio. Al automatizar tareas repetitivas, puedes ahorrar tiempo y reducir la posibilidad de errores. Esto puede liberar a tu equipo para que se concentre en tareas más importantes y estratégicas.</p><p>Además, la automatización de procesos puede proporcionar una visión más clara de tu negocio. Al automatizar el seguimiento de las mercancías, las ganancias, las compras y los clientes, puedes tener una visión en tiempo real de cómo está funcionando tu negocio. Esto puede ayudarte a tomar decisiones informadas y a identificar áreas de mejora.</p><p>Finalmente, la automatización de procesos puede mejorar la experiencia del cliente. Al automatizar sistemas de atención al cliente para gestionar llamadas y mensajes, puedes asegurarte de que ningún cliente se quede sin respuesta. Además, los sistemas automáticos que envían correos electrónicos y mensajes de texto con fines promocionales pueden mantener a tus clientes informados y comprometidos.</p><p>&nbsp;</p><h3><strong>Comercio electrónico</strong></h3><p><img alt="pexels-pixabay-38519.jpg" src="https://contenido.noxcreation.dev/uploads/pexels_pixabay_38519_a107a4d573.jpg"></p><p>El comercio electrónico ofrece una gran cantidad de oportunidades para los negocios. Al vender productos o servicios en línea, puedes llegar a un público más amplio y operar fuera del horario comercial tradicional. Esto puede aumentar tus ventas y permitirte crecer más rápido.</p><p>Además, el comercio electrónico puede proporcionar una experiencia de compra conveniente para tus clientes. Pueden comprar tus productos o servicios a cualquier hora y desde cualquier lugar, y pueden tener acceso a una gama más amplia de opciones que en una tienda física.</p><p>Finalmente, el comercio electrónico puede proporcionarte valiosos datos sobre tus clientes. Puedes rastrear sus comportamientos de compra, lo que puede proporcionarte información sobre sus preferencias y hábitos. Esto puede ayudarte a personalizar tus ofertas y a mejorar tus estrategias de marketing.</p><p>&nbsp;</p><h3><strong>Aplicaciones móviles</strong></h3><p><img alt="pexels-wdnet-887751.jpg" src="https://contenido.noxcreation.dev/uploads/pexels_wdnet_887751_2291d94dfa.jpg"></p><p>Las aplicaciones móviles pueden ser una excelente manera de conectar con tus clientes. Al tener tu propia aplicación móvil, puedes proporcionar a tus clientes una plataforma donde pueden interactuar con tu negocio de una manera más directa y personal.</p><p>Además, los aplicaciones móviles pueden mejorar la experiencia del cliente. Pueden hacer que sea más fácil para tus clientes reservar productos o turnos, realizar consultas o visualizar tus productos. Esto puede aumentar la satisfacción del cliente y fomentar la lealtad a tu marca.</p><p>Finalmente, las aplicaciones móviles pueden proporcionarte valiosos datos sobre tus clientes. Puedes rastrear cómo interactúan con tu aplicación, lo que puede proporcionarte información sobre sus comportamientos y preferencias. Esto puede ayudarte a mejorar tu aplicación y a personalizar tus ofertas.<br>&nbsp;</p><h1><strong>Otros temas de ayuda</strong></h1><h3>&nbsp;</h3><h3><strong>Carteles de Negocio Personalizados</strong></h3><figure class="image image-style-side"><img height="467" width="350" alt="pvc2.webp" src="https://contenido.noxcreation.dev/uploads/pvc2_276b88dc61.webp" style="aspect-ratio:350/467;"></figure><p>Los carteles de negocio personalizados en vinilo y PVC son una excelente manera de anunciar tus servicios y atraer a nuevos clientes. Un cartel bien diseñado puede captar la atención de las personas y hacer que tu negocio destaque entre la multitud. Además, los carteles personalizados te permiten comunicar tu mensaje de una manera única y creativa, lo que puede ayudar a establecer la identidad de tu marca.</p><p>Además, los carteles de negocio son una forma efectiva de publicidad local. Pueden atraer a las personas que pasan por tu negocio y pueden ser especialmente útiles si tu negocio está ubicado en una zona con mucho tráfico peatonal o vehicular. Los carteles también pueden ser una forma rentable de publicidad, ya que una vez que se han producido, pueden durar mucho tiempo y seguir atrayendo a nuevos clientes.</p><p>Finalmente, los carteles de negocio personalizados pueden ayudar a crear una impresión profesional. Un cartel de alta calidad puede dar la impresión de que tu negocio es profesional y confiable, lo que puede ayudar a atraer a más clientes.<br>&nbsp;</p><h3><strong>Correos Institucionales</strong></h3><p>Tener correos institucionales puede aportar numerosos beneficios a tu negocio. En primer lugar, un correo institucional puede ayudar a establecer la credibilidad de tu negocio. Un correo electrónico con el dominio de tu empresa puede dar la impresión de que tu negocio es legítimo y profesional.</p><p>Además, los correos institucionales pueden ayudar a organizar y gestionar la comunicación de tu empresa. Puedes tener diferentes correos electrónicos para diferentes departamentos o funciones, lo que puede ayudar a asegurar que los mensajes lleguen a las personas adecuadas.</p><p>Finalmente, los correos institucionales pueden ayudar a construir la identidad de tu marca. Cada vez que envías un correo electrónico desde tu dominio de empresa, estás promoviendo tu marca. Esto puede ayudar a aumentar el reconocimiento de tu marca y a construir una imagen coherente de tu empresa.</p><h3>&nbsp;</h3><h3><strong>Creación de Logos y Branding</strong></h3><figure class="image image-style-side"><img height="307" width="320" alt="smartmockups_lv2xdaln.jpg" src="https://contenido.noxcreation.dev/uploads/smartmockups_lv2xdaln_676df6168b.jpg" style="aspect-ratio:320/307;"></figure><p>La creación de logos y el trabajo de branding son aspectos fundamentales para cualquier empresa. Un logo bien diseñado puede ayudar a establecer la identidad de tu marca y a diferenciarte de la competencia. Un logo efectivo es memorable y refleja los valores y la personalidad de tu empresa.</p><p>El branding va más allá del logo. Incluye todos los aspectos que definen cómo se percibe tu marca, desde los colores y las fuentes que utilizas hasta el tono de voz de tus comunicaciones. Un branding efectivo puede ayudar a atraer a tu público objetivo y a construir lealtad hacia tu marca.</p><p>Además, el branding puede ayudar a guiar tus decisiones de marketing y estrategia. Al tener una comprensión clara de lo que representa tu marca, puedes tomar decisiones más informadas que apoyen y refuercen tu marca.<br>&nbsp;</p><h3><strong>QR de Negocio</strong></h3><p>Los códigos QR de negocio son una herramienta poderosa para conectar con tus clientes. Al escanear un código QR, los clientes pueden ser dirigidos a tu página web, a un menú de un restaurante, a una tabla de precios, o a cualquier otra información que desees compartir.</p><p>Los códigos QR son especialmente útiles en el mundo digital actual, donde los clientes están cada vez más conectados. Al proporcionar un enlace directo a tu contenido en línea, puedes ofrecer a tus clientes una experiencia fluida y conveniente.</p><p>Además, los códigos QR pueden ayudarte a rastrear la efectividad de tus campañas de marketing. Puedes ver cuántas personas escanean tu código QR, lo que te puede dar una idea de cuántas personas están interactuando con tu contenido.<br><br>&nbsp;</p><p>En <strong>NOX Creation</strong>, estamos emocionados de embarcarnos en este viaje contigo. Esperamos que la información que hemos compartido hoy te haya proporcionado una visión clara de quiénes somos, qué hacemos y cómo podemos ayudarte a crecer en el mundo digital. Creemos firmemente en el poder de la tecnología para transformar ideas en realidades y estamos comprometidos a hacer precisamente eso para nuestros clientes. Si tienes alguna pregunta o si estás listo para dar el siguiente paso con nosotros, no dudes en contactarnos. ¡Estamos aquí para ti y esperamos con ansias la oportunidad de ayudarte a alcanzar tus metas! 😊</p>`
    },
    {
        slug: "que_pagina_negocio_como_ayudara_destacar",
        author: "josué",
        datetime: "2024-05-24T16:47:30.000Z",
        title: "¿Qué es una página de negocio y cómo te ayudará a destacar?",
        description: "Una página de negocio es un espacio en línea dedicado a una empresa o negocio específico. Esta página puede estar en una plataforma de redes sociales como Facebook, LinkedIn o Instagram, o puede ser un sitio web independiente. Proporciona información esencial sobre el negocio, como la descripción de la empresa, los productos o servicios que ofrece, la ubicación y las formas de contacto.",
        tags: ["professionals", "web"],
        img: 'https://contenido.noxcreation.dev/uploads/publicacion_2_fc1539b731.jpg',
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/publicacion_2_fc1539b731.jpg") center center / cover no-repeat',
        html: `<p>En el mundo digital de hoy, tener una presencia en línea es crucial para el éxito de cualquier negocio. Una de las formas más efectivas de lograr esto es a través de una <strong>página de negocio</strong>. Pero, ¿qué es exactamente una página de negocio y cómo puede ayudarte a destacar? ¡Vamos a descubrirlo!<br>&nbsp;</p><h2><strong>¿Qué es una página de negocio?</strong></h2><figure class="image image-style-side"><img height="271" width="250" alt="Screenshot_3.jpg" src="https://contenido.noxcreation.dev/uploads/Screenshot_3_c6e0321f50.jpg" style="aspect-ratio:250/271;"></figure><p>Una página de negocio es un espacio en línea dedicado a una empresa o negocio específico. Esta página puede estar en una plataforma de redes sociales como Facebook, LinkedIn o Instagram, o puede ser un sitio web independiente. Proporciona información esencial sobre el negocio, como la descripción de la empresa, los productos o servicios que ofrece, la ubicación y las formas de contacto.</p><p>En <strong>NOX Creation</strong>, nos especializamos en el desarrollo de estas páginas de negocio, también conocidas como landing pages. Creamos páginas de negocio personalizadas que reflejan la identidad única de tu empresa y destacan tus productos o servicios.</p><p>&nbsp;</p><h2><strong>¿Cómo puede una página de negocio ayudarte a destacar?</strong></h2><h3><strong>Visibilidad en línea</strong></h3><p>En la era digital, la mayoría de las personas buscan productos y servicios en línea. Tener una página de negocio aumenta tu visibilidad en línea, lo que puede atraer a más clientes. En <strong>NOX Creation</strong>, diseñamos páginas de negocio que son fácilmente visibles y accesibles para los motores de búsqueda, lo que aumenta la probabilidad de que los clientes potenciales encuentren tu negocio.</p><figure class="image image-style-side"><img height="190" width="250" alt="Screenshot_8.jpg" src="https://contenido.noxcreation.dev/uploads/Screenshot_8_df10bdfa7c.jpg" style="aspect-ratio:250/190;"></figure><h3><strong>Credibilidad</strong></h3><p>Una página de negocio bien diseñada y mantenida puede aumentar la credibilidad de tu empresa. Los clientes potenciales a menudo buscan información en línea antes de hacer una compra. Una página de negocio profesional puede darles la confianza que necesitan para elegir tu empresa. En <strong>NOX Creation</strong>, nos esforzamos por crear páginas de negocio que reflejen la profesionalidad y la fiabilidad de tu empresa.</p><p>&nbsp;</p><h3><strong>Interacción con los clientes</strong></h3><p>Las páginas de negocio también ofrecen una excelente plataforma para interactuar con los clientes. Puedes publicar actualizaciones, responder a preguntas, recibir comentarios y más. Esta interacción puede ayudarte a construir relaciones sólidas con tus clientes. En <strong>NOX Creation</strong>, incorporamos funciones interactivas en nuestras páginas de negocio para facilitar la comunicación entre tú y tus clientes.</p><p>&nbsp;</p><h3><strong>Análisis y perspectivas</strong></h3><p><img alt="Screenshot_6.jpg" src="https://contenido.noxcreation.dev/uploads/Screenshot_6_942fd4e8f0.jpg"></p><p>Muchas plataformas de páginas de negocio ofrecen herramientas de análisis que te permiten rastrear visitas, interacciones y otras métricas importantes. Estos datos pueden proporcionarte valiosas perspectivas que puedes utilizar para mejorar tu negocio. En <strong>NOX Creation</strong>, podemos integrar estas herramientas en tu página de negocio para ayudarte a entender mejor a tu audiencia y a optimizar tu estrategia de negocio.</p><p><br>En resumen, una página de negocio es una herramienta poderosa que puede ayudarte a destacar en el competitivo mundo empresarial de hoy. Si aún no tienes una, ¡es hora de empezar!</p>`
    },
    {
        slug: "la_importancia_diseno_personalizado",
        author: "josué",
        datetime: "2024-05-24T16:49:36.000Z",
        title: "La importancia de un diseño personalizado",
        description: "En la era de la personalización, donde cada detalle cuenta, un diseño personalizado se ha convertido en un elemento esencial para cualquier negocio que busque hacer una declaración de marca fuerte. Este enfoque de diseño a medida no sólo refleja la identidad única de tu negocio, sino que también te permite destacar en un mercado cada vez más competitivo.",
        tags: ["design", "identity"],
        img: "https://contenido.noxcreation.dev/uploads/publicacion_3_120e53238e.jpg",
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/publicacion_3_120e53238e.jpg") center center / cover no-repeat',
        html: `<p>En la era de la personalización, donde cada detalle cuenta, un diseño personalizado se ha convertido en un elemento esencial para cualquier negocio que busque hacer una declaración de marca fuerte. Este enfoque de diseño a medida no sólo refleja la identidad única de tu negocio, sino que también te permite destacar en un mercado cada vez más competitivo. Pero, ¿qué implica realmente un diseño personalizado y por qué es tan crucial para tu negocio? ¡<strong>Descubrámoslo</strong>!</p><p>&nbsp;</p><p><img alt="campaign-creators-iEiUITs149M-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/campaign_creators_i_Ei_UI_Ts149_M_unsplash_59852fe339.jpg"></p><p>&nbsp;</p><h1><strong>¿Qué es un diseño personalizado?</strong></h1><p>Un diseño personalizado es un diseño único que se crea específicamente para un individuo o una empresa. Puede ser un diseño de un sistema, una página web, una aplicación móvil, o cualquier otro producto digital. A diferencia de los diseños genéricos o prediseñados, un diseño personalizado refleja la identidad única de la marca y se adapta a sus necesidades y objetivos específicos.</p><p>&nbsp;</p><h2><strong>¿Por qué es importante un diseño personalizado?</strong></h2><p>&nbsp;</p><p><img alt="ux-indonesia-qC2n6RQU4Vw-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/ux_indonesia_q_C2n6_RQU_4_Vw_unsplash_a4e5e31b8e.jpg"></p><p><strong>Autenticidad</strong></p><p>Un diseño personalizado aporta autenticidad a tu marca. Refleja tu visión, tus valores y tu personalidad, lo que puede ayudarte a conectar con tu público objetivo a un nivel más profundo. En <strong>NOX Creation</strong>, nos esforzamos por crear diseños que sean verdaderamente auténticos y reflejen la esencia de tu marca.</p><p>&nbsp;</p><h3><strong>Diferenciación</strong></h3><p>En un mercado saturado, un diseño personalizado puede ayudarte a destacar. Un diseño único y atractivo puede captar la atención de los clientes potenciales y hacer que tu marca sea memorable. Creamos diseños que no sólo son estéticamente agradables, sino que también son distintivos y memorables.</p><p>&nbsp;</p><h3><strong>Flexibilidad</strong></h3><p>Un diseño personalizado te ofrece la flexibilidad de adaptar tu producto digital a tus necesidades específicas. Puedes incorporar características y funcionalidades que son relevantes para tu negocio y tu público objetivo. Trabajamos estrechamente contigo para entender tus necesidades y crear un diseño que las cumpla.</p><p>&nbsp;</p><h3><strong>Eficiencia</strong></h3><p>Al diseñar primero todo el sistema o la aplicación antes de sumergirnos en el desarrollo, podemos identificar y resolver posibles problemas de diseño desde el principio. Esto no sólo mejora la calidad del producto final, sino que también puede ahorrar tiempo y recursos en el desarrollo.</p><p>&nbsp;</p><p><img alt="kevin-bhagat-zNRITe8NPqY-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/kevin_bhagat_z_NRI_Te8_N_Pq_Y_unsplash_e328670b01.jpg"></p><p>&nbsp;</p><p>Un diseño personalizado es una inversión valiosa que puede aportar autenticidad a tu marca, ayudarte a destacar y mejorar la eficiencia de tu proceso de desarrollo. Si estás buscando un diseño personalizado para tu próximo proyecto, ¡<strong>NOX Creation</strong> está aquí para ayudarte!</p>`
    },
    {
        slug: "oferta_trabajo_julio",
        author: "josué",
        datetime: "2024-07-12T16:30:21.000Z",
        title: "🚀 Únete al equipo innovador de NOX Creation 🚀",
        description: "En NOX Creation (https://noxcreation.dev), no solo desarrollamos software, ¡creamos experiencias que transforman ideas en realidad! Somos un equipo dinámico y en crecimiento, y estamos en la búsqueda de un talento excepcional para expandir nuestras fronteras digitales.",
        tags: ["programming", "web"],
        img: "https://contenido.noxcreation.dev/uploads/NOX_CREATION_b1c6be7203.jpg",
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/NOX_CREATION_b1c6be7203.jpg") center center / cover no-repeat',
        html: `<p>En <strong>NOX Creation</strong>, no solo desarrollamos software, <i>¡creamos experiencias que transforman ideas en realidad!</i> Somos un equipo <strong>dinámico </strong>y en <strong>crecimiento</strong>, y estamos en la búsqueda de un <strong>talento excepcional</strong> para expandir nuestras fronteras digitales.</p><h3>&nbsp;</h3><h2><strong>Desarrollador Frontend React/Next.js</strong></h2><p>¿Eres un maestro del código que convierte diseños de <strong>Figma </strong>en interfaces de usuario impresionantes con una precisión del 100%? ¿Tu creatividad florece con <strong>React </strong>y <strong>Next.js</strong>, y te sientes como en casa con <strong>Chakra UI</strong>? Si eres un entusiasta de <strong>GraphQL </strong>y te gusta trabajar por objetivos claros, ¡queremos conocerte!</p><p><i><strong>Requisitos</strong></i>:<br>- Profundo conocimiento en React/Next.js<br>- Experiencia con Chakra UI y maquetación desde Figma<br>- Familiaridad con el consumo de servicios GraphQL<br>- Proactividad, creatividad y habilidades de trabajo en equipo<br>- Conocimientos básicos en GitHub</p><p>&nbsp;</p><h2><strong>¿Cómo aplicar?</strong></h2><p>Para aplicar deberás antes escribirnos. Desde allí le compartiremos una dirección Figma con el diseño de una <strong>Landing Page</strong>. El reto será maquetar dicho diseño usando <strong>React/Next</strong> y <strong>Chakra UI</strong>. Estaremos midiendo <i>tiempo de desarrollo</i>, <i>fiabilidad con el diseño</i>, <i>responsive y creatividad</i>. Deberá subir y compartirnos el código a <strong>Github</strong>.</p><p>&nbsp;</p><p><strong>¿Listo para el desafío?</strong><br>¡Esperamos con entusiasmo tu talento y creatividad para seguir innovando&nbsp;juntos!</p><p>📱 Telegram: @KIKNothing<br>📱 WhatsApp: <a href="https://wa.me/+5358477311?text=Hola, me intereza la plaza. ¿Me puede dar más detalles?">+5358477311</a><br>📧 Correo: <a href="mailto:services@noxcreation.dev">services@noxcreation.dev</a></p>`
    },
    {
        slug: "rosalba-la-primera-presentadora-de-la-radio-cubana-creada-con-inteligencia-artificial",
        author: "josué",
        datetime: "2024-06-01T15:08:30.000Z",
        title: "Rosalba, la primera presentadora de la radio cubana creada con Inteligencia Artificial",
        description: "Nombrada como la protagonista de una canción del gran trovador Miguel Companioni, la presentadora virtual tuvo su estreno en la emisora Radio Sancti Spíritus.",
        tags: ["technology", "artificial intelligence"],
        img: "https://contenido.noxcreation.dev/uploads/publicacion_5_13225192d7.jpg",
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/publicacion_5_13225192d7.jpg") center center / cover no-repeat',
        html: `<p>La primera presentadora de la <a href="https://oncubanews.com/tag/radio-cubana/"><strong>radio cubana</strong></a> creada con Inteligencia Artificial (IA) tuvo su estreno este jueves en <strong>Sancti Spíritus</strong>.</p><p>El avatar de la presentadora virtual lleva por nombre Rosalba y es una joven llamada como la protagonista de una célebre canción de Miguel Companioni, uno de los grandes de la trova espirituana y de toda Cuba.</p><p>Rosalba fue presentada por la emisora Radio Sancti Spíritus en el inicio de la Feria Tecnológica La Guayabera 5.10, evento dedicado al aniversario 510 de la fundación de esa ciudad.&nbsp;</p><p>Antes de la presentación, la propia estación <a href="https://www.radiosanctispiritus.cu/es/la-ia-en-la-convergencia-editorial-de-la-multiplataforma-radio-sancti-spiritus/?fbclid=IwZXh0bgNhZW0CMTEAAR0ZbP1xUlgdF6q-X-awFelilGFdgdaaZABL6XjaieZ8bxvrOHeyJZ0T_y4_aem_AYba5qDsDz8tW9pzZQIwik2_jQMGhOe3g8Bt8dPIepLeCFql6MI1tFXsZnG76PcNxtT6I-Hs2UQ9-ePafP59_ev2"><strong>había explicado</strong></a> que la IA se emplearía para “animar cuentos, concebidos inicialmente para la antena y ahora disponibles en el canal de Youtube”.</p><p>También, en “la generación de textos e imágenes para compendios informativos; así como diseños de gráficas para internet”.</p><p>La nota, sin embargo, no precisa el autor —persona o entidad— del diseño de Rosalba, ni tampoco si su figura y su voz partieron de un modelo conocido o fueron creados de cero.</p><p>Además del lanzamiento de la presentadora virtual, Radio Sancti Spíritus también presentó en la feria tecnológica una multiplataforma, “primera de su tipo en Cuba”, la cual “integra la producción radiofónica y audiovisual en la gestión editorial del medio”.</p><h3><strong>La IA en Cuba</strong></h3><p>Convertida en una de las herramientas tecnológicas de mayor uso en la actualidad, la IA ha venido dando sus primeros pasos en Cuba.</p><p>El pasado abril, por ejemplo, fue presentada en La Habana&nbsp;la herramienta&nbsp;<a href="https://plataformia.com/"><strong>Plataformia</strong></a> con la intención de contribuir, con la creación de diversos productos, “al entramado empresarial partiendo de la baja disponibilidad de recursos humanos que puedan existir en algunos centros”.</p><p>El desarrollo de la informatización y, en particular, de la IA forman parte de la <a href="https://www.presidencia.gob.cu/es/noticias/inteligencia-artificial-el-bienestar-posible/"><strong>agenda del gobierno cubano</strong></a>. En un intercambio con miembros de Academia de Ciencias de Cuba, el propio presidente Miguel Díaz-Canel pidió elaborar la Estrategia de Inteligencia Artificial.</p><p>Sobre esa línea, con participación cubana,&nbsp; fue inaugurado en octubre de 2023 el Instituto Internacional de Investigaciones en IA en China.</p><p>La institución es parte de un proyecto gestado desde 2019 por la Universidad de Estudios Internacionales de Habei, con la colaboración de varias&nbsp;<strong>universidades</strong>&nbsp;de la isla, entre ellas las de Camagüey, Villa Clara, Cienfuegos y La Habana.</p><p>El proyecto pretende contribuir al desarrollo en áreas como la biotecnología y biomedicina, medioambiente, energía renovable, calidad de vida, ciudades inteligentes, agricultura de precisión, industria 4.0 y telecomunicaciones, <a href="https://www.acn.cu/medio-ambiente/universidades-cubanas-fortalecen-alianza-cientifica-con-china"><strong>de acuerdo con</strong></a>&nbsp;la&nbsp;<i>Agencia Cubana de Noticias (ACN)</i>.</p><p>También en 2023 el Centro de Física de la Atmósfera del Instituto de Meteorología de Cuba <strong>anunció</strong> el desarrollo de un proyecto para pronosticar periodos de sequías con inteligencia artificial. Con ello, se busca poder estimar el comportamiento de las precipitaciones y eventos de sequía en lapsos de 15 días, un mes, tres, seis y hasta un año<i>.</i><br><br><i>Fuente: </i><a href="https://oncubanews.com/cuba/rosalba-la-primera-presentadora-de-la-radio-cubana-creada-con-inteligencia-artificial/"><i>oncubanews</i></a></p>`
    },
    {
        slug: "miedo-emprender",
        author: "josué",
        datetime: "2024-05-30T17:50:51.000Z",
        title: "El miedo a emprender",
        description: "Alguna vez nos hemos sentido que caminamos en un bucle profesionalmente y que tenemos la capacidad y somos lo suficientes para emprender un cambio profesional en nuestras vidas. Pero a menudo nos encontramos con esos miedos de arriesgarlo todo por un futuro incierto. Esos son, los miedos a emprender.",
        tags: ["motivational", "psychology"],
        img: "https://contenido.noxcreation.dev/uploads/publicacion_4_773ae73f1e.jpg",
        bg_img: 'url("https://contenido.noxcreation.dev/uploads/publicacion_4_773ae73f1e.jpg") center center / cover no-repeat',
        html: `<p>Alguna vez nos hemos sentido que caminamos en un bucle profesionalmente y que tenemos la capacidad y somos lo suficientes para emprender un cambio profesional en nuestras vidas. Pero a menudo nos encontramos con esos miedos de arriesgarlo todo por un futuro incierto. Esos son, los miedos a emprender.</p><p>&nbsp;</p><p>Resulta que el miedo es algo normal y natural que vamos a tener que afrontar varias veces en la vida. Nuestro primer miedo fue una vez caminar, aunque de forma inconsciente, teníamos miedo a dar ese primer paso. Entre encontrar el equilibrio, gatear cuando el miedo nos superaba, el peso de nuestro cuerpo no soportado por nuestras pequeñas piernecitas uffff, solo imagínalo. Hasta me da miedo pararme ahora de mi escritorio cuando lo pienso 😅</p><p>&nbsp;</p><p><img alt="priscilla-du-preez-3CTufp-cpzo-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/priscilla_du_preez_3_C_Tufp_cpzo_unsplash_d2ed6670d4.jpg"></p><p>&nbsp;</p><p>Pero, si lo piensas, hoy caminar es algo tan, pero tan natural, que no nos da miedo caminar y lo hacemos con total confianza y seguridad. De eso se trata, nuestros miedos pasados hoy son partes de nuestra vida común y cada vez lo hacemos como algo natural sin ni siquiera analizar si puede o no hacernos algún mal. Y es por ello que lo primero que debes comprender, es que esos miedos del hoy, esos miedos a emprender, mañana serán tan naturales que te sorprenderás ☺️.</p><p>&nbsp;</p><h2><strong>Pero ¿cómo superarlos?</strong><br>&nbsp;</h2><p>Cada vez que desees conocer la respuesta a una pregunta, puedes usar otra pregunta que la pueda responder, quizás usando un contra ejemplo. Te enseño, el ejemplo que puse cuando éramos niños y cuánto temor nos daba caminar, pues, <strong>¿cómo pude superar mi miedo a caminar?</strong></p><p>&nbsp;</p><p><img alt="sander-sammy-TuLHpIflZH0-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/sander_sammy_Tu_L_Hp_Ifl_ZH_0_unsplash_290d5dc373.jpg"></p><p>&nbsp;</p><p>Todo llevó <strong>tiempo</strong>, muchos <strong>intentos</strong> a los que llamamos <strong>prueba y error</strong>, luego estuvo el <strong>deseo</strong>, al estar todo a gran altura, nos vimos obligados a intentar ponernos de pie para alcanzar un juguete, algún dulce o para atrapar el cuello de mamá o papá y por último la <strong>persistencia </strong>para lograrlo. Y con la respuesta a la contra pregunta y usando un contra ejemplo para responderla, ya hemos solucionado y dado respuesta a ¿cómo superar mi miedo a emprender?</p><p>&nbsp;</p><p>Las recetas mágicas son tiempo, intentos, deseos y persistencia. Si sientes que debes cambiar tu vida profesional, tendrás el deseo, el deseo no es solo el hecho de querer intentarlo, el deseo es ese peso en el corazón que te dice que puedes lograr lo que te propongas, pero no basta, tienes que intentarlo, e intentarlo no es que pruebes y al primer obstáculo ya dejes toda intención a tras. Los grandes inventos de hoy, son prueba fiel de cuántos intentos fallidos hicieron posible el intento final ganador. Es por ello que se dice que <strong>el éxito está de la mano del fracaso</strong>. Si hoy tenemos una pareja, si hoy conocemos lo bueno, lo positivo, lo negativo, y el como podemos lograr enamorar a otra persona, es gracias a todos esos eventos pasados en los que no pudimos. Si fracasas en un intento, regresa par de pasos atrás, analiza que fue lo que salió mal, proyecta nuevos objetivos, enfócate y busca todas las herramientas que te hagan mejorar lo que ayer fallaste.</p><p>&nbsp;</p><p>Y por tanto, estamos hablando de la persistencia, esto es clave, mientras más persistas más cerca estás de tu objetivo. Sé bien que hay fallos catastróficos, que te quitan las ganas de todo, que sientes que el mundo se destruye y que de verdad entran deseos de tirar la toalla y volver a tu vida común. Pero, te tengo noticias, cuando estén en tu vida común sentirás que te falta algo, sentirás que no eres feliz con lo que haces y vivirás inconforme con lo que haces siempre. Por ello te estoy advirtiendo desde ya, si vas a emprender, el camino no es de rosas, pero la gran diferencia la haces tú.</p><p>&nbsp;</p><p>No importa cuanto fracases, vendrá ese instante, pequeño y capaz fugaz, donde sí triunfas y avanzas unos milímetros hacia tu objetivo. Pero, no tienes idea el poder que esto te da para impulsarte cada vez más. La frase de, <strong>divide y vencerás</strong> hace alusión a que debes resolver primero pequeños problemas, no importa que tan pequeños sean. Estos pequeños problemas resueltos desprenden una gran hola de energía a tu mente que luego va sumando poco a poco victorias y te hace entender que estás en el camino correcto. Así que, nunca lo dejes de intenta.</p><p><br><br><img alt="photo_tatti-74sFZPxbmsA-unsplash.jpg" src="https://contenido.noxcreation.dev/uploads/photo_tatti_74s_FZ_Pxbms_A_unsplash_58354bc56e.jpg"></p><p>&nbsp;</p><p>Y tiempo, el tiempo valioso que se nos escapa, cuando llegue el momento, detente, no hagas nada, relaja tu mente, mira al cielo y comienza a pensar todo lo que haz logrado, cuanto haz avanzado, cuanto ya sabes hoy que no sabías ayer y te hace mejor. Llénate de esa energía que el cielo nos da y que nuestros pensamientos llenan de color, calidez y de una emoción sin descripción.</p><p>&nbsp;</p><p>Te tengo más noticias ... Cuando logres tus objetivos, no vas a parar, te propondrás nuevas metas y te convertirás en una persona ambiciosa con tus objetivos y encontraras nuevos retos y nuevas oportunidades en un bucle sin fin 😜.<br><br>Sin dudas el camino es difícil, pero no imposible, recuerda esta pregunta que te haré, si otros lo han logrado, <strong>¿Por qué tú no?</strong> 😉</p><p>&nbsp;</p><p><img alt="photo-1640869112846-2e5ae0d1b807.jpg" src="https://contenido.noxcreation.dev/uploads/photo_1640869112846_2e5ae0d1b807_bf561e9ecb.jpg"></p>`
    },
]

const Blog = () => {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    const [tagFilter, setTagFilter] = useState("todos")
    const [loading, setLoading] = useState(true)

    const filteredBlogs = tagFilter === "todos" ? blogs : blogs.filter(blog => blog.tags.includes(tagFilter))

    const maxPages = Math.ceil(filteredBlogs.length / 6)

    useEffect(() => {
        console.log("loaded")
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleGoToPage = useCallback((page: number) => {
        if (page < 1 || page > maxPages) {
            throw new Error("Invalid page")
        }
        setCurrentPage(page);
    }, []);
    const handleNextPage = useCallback(() => {
        setCurrentPage(currentPage + 1);
    }, []);
    const handlePrevPage = useCallback(() => {
        setCurrentPage(currentPage - 1);
    }, [currentPage]);

    return (
        <Flex
            as='section'
            gap={"40px"}
            px={{ base: "25px", md: "112px" }}
            pt={10}
            pb={"50px"}
            flexDir={"column"}
        >
            <Flex>
                <Heading
                    as="h1"
                    fontSize={"24px"}
                    lineHeight={{ base: '1.33', md: '1.2' }}
                    fontWeight={"bold"}
                    fontFamily={"heading"}
                >
                    Publicaciones destacados
                </Heading>
            </Flex>

            <Flex
                gap={8}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Flex
                    flex={"1 1 0%"}
                    flexDirection={"column"}
                    gap={8}
                >
                    <Box
                        transition={"all 0.5s ease-in-out"}
                        transform={loading ? "translateX(-100px) translateY(100px) translateZ(100px)" : "translateX(0px) translateY(0px) translateZ(0px)"}
                        opacity={loading ? 0 : 1}
                    >
                        <Flex
                            as={"a"}
                            href={`/blog/${blogs[0].slug}?prev=true`}
                            w={"auto"}
                            gap={8}
                            cursor={"pointer"}
                            flexDirection={"column"}
                            transition={"all 0.5s ease 0s"}
                            _hover={{
                                transform: "scale(1.05)",
                                transition: "all 0.5s ease 0s"
                            }}
                        >
                            <Box
                                display={"flex"}
                                height={"200px"}
                                width={"auto"}
                                position={"relative"}
                                overflow={"hidden"}
                                style={{
                                    viewTransitionName: `blog-img-prev-${blogs[0].slug}`
                                }}
                            >
                                <Image
                                    src={blogs[0].img}
                                    alt={blogs[0].title || "Blog article image"}
                                    objectFit="cover"
                                    width={"-webkit-fill-available"}
                                    height={"-webkit-fill-available"}
                                />
                            </Box>
                            <Flex
                                flexDirection={"column"}
                                gap={4}
                            >
                                <Flex
                                    gap={2}
                                    flexDir={"column"}
                                >
                                    <Text fontSize={"14px"} fontWeight={600} color={"primary.600"}>{blogs[0].author} • {new Date(blogs[0].datetime).toLocaleDateString()}, {new Date(blogs[0].datetime).toLocaleTimeString()}</Text>
                                    <Text fontSize={"24px"} fontWeight={600} color={"black"}>{blogs[0].title}</Text>
                                    <Text fontSize={"16px"} fontWeight={400} height={"95px"} overflow={"hidden"} color={"rgb(123, 123, 123)"}>{blogs[0].description}</Text>
                                </Flex>
                                <Flex gap={3} flexWrap={"wrap"}>
                                    {
                                        blogs[0].tags.map(tag => (
                                            <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    flex={"1 1 0%"}
                    flexDirection={"column"}
                    gap={8}
                >
                    <Box
                        transition={"all 0.5s ease-in-out"}
                        transform={loading ? "translateX(100px) translateY(100px) translateZ(-100px)" : "translateX(0px) translateY(0px) translateZ(0px)"}
                        opacity={loading ? 0 : 1}
                    >
                        <Flex
                            as={"a"}
                            href={`/blog/${blogs[1].slug}?prev=true`}
                            flexDirection={{ base: "column", md: "row" }}
                            width={"auto"}
                            gap={4}
                            cursor={"pointer"}
                            transition={"all 0.5s ease 0s"}
                            _hover={{
                                transform: "scale(1.05)",
                                transition: "all 0.5s ease 0s"
                            }}
                        >
                            <Box
                                flex={{ md: 1 }}
                                height={"200px"}
                                width={{ md: "200px" }}
                                position={"relative"}
                                overflow={"hidden"}
                                style={{
                                    viewTransitionName: `blog-img-prev-${blogs[1].slug}`
                                }}
                            >
                                <Image
                                    src={blogs[1].img}
                                    alt={blogs[1].title || "Blog article image"}
                                    objectFit="cover"
                                    width={"-webkit-fill-available"}
                                    height={"-webkit-fill-available"}
                                />
                            </Box>

                            <Flex
                                flex={{ md: "1 1 0%" }}
                                flexDir={"column"}
                                gap={4}
                                position={"relative"}
                            >
                                <Flex
                                    flexDirection={"column"}
                                    gap={2}
                                >
                                    <Text fontSize={"18px"} fontWeight={600} color={"black"}>{blogs[1].title}</Text>
                                    <Text fontSize={"16px"} fontWeight={400} height={"95px"} overflow={"hidden"} color={"rgb(123, 123, 123)"}>{blogs[1].description}</Text>
                                </Flex>
                                <Flex gap={3} flexWrap={"wrap"}>
                                    {
                                        blogs[1].tags.map(tag => (
                                            <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        transition={"all 0.5s ease-in-out"}
                        transform={loading ? "translateX(100px) translateY(100px) translateZ(-100px)" : "translateX(0px) translateY(0px) translateZ(0px)"}
                        opacity={loading ? 0 : 1}
                    >
                        <Flex
                            as={"a"}
                            href={`/blog/${blogs[2].slug}?prev=true`}
                            flexDirection={{ base: "column", md: "row" }}
                            width={"auto"}
                            gap={4}
                            cursor={"pointer"}
                            transition={"all 0.5s ease 0s"}
                            _hover={{
                                transform: "scale(1.05)",
                                transition: "all 0.5s ease 0s"
                            }}
                        >
                            <Box
                                flex={{ md: 1 }}
                                height={"200px"}
                                width={{ md: "200px" }}
                                position={"relative"}
                                overflow={"hidden"}
                                style={{
                                    viewTransitionName: `blog-img-prev-${blogs[2].slug}`
                                }}
                            >
                                <Image
                                    src={blogs[2].img}
                                    alt={blogs[2].title || "Blog article image"}
                                    objectFit="cover"
                                    width={"-webkit-fill-available"}
                                    height={"-webkit-fill-available"}
                                />
                            </Box>

                            <Flex
                                flex={{ md: "1 1 0%" }}
                                flexDir={"column"}
                                gap={4}
                                position={"relative"}
                            >
                                <Flex
                                    flexDirection={"column"}
                                    gap={2}
                                >
                                    <Text fontSize={"18px"} fontWeight={600} color={"black"}>{blogs[2].title}</Text>
                                    <Text fontSize={"16px"} fontWeight={400} height={"95px"} overflow={"hidden"} color={"rgb(123, 123, 123)"}>{blogs[2].description}</Text>
                                </Flex>
                                <Flex gap={3} flexWrap={"wrap"}>
                                    {
                                        blogs[2].tags.map(tag => (
                                            <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

            <Flex pt={"30px"}>
                <Heading
                    as="h1"
                    fontSize={"24px"}
                    lineHeight={{ base: '1.33', md: '1.2' }}
                    fontWeight={"bold"}
                    fontFamily={"heading"}
                >
                    Todas las publicaciones
                </Heading>

                <Flex flex={"1 1 0%"} justifyContent={"end"}>
                    <Select
                        width={"130px"}
                        position={"relative"}
                        onChange={(e) => {
                            setTagFilter(e.currentTarget.value)
                        }}
                    >
                        <option key={"todos"} value={"todos"}>Todos</option>
                        {
                            Array.from(new Set(blogs.flatMap((blog) => blog.tags))).map(tag => (
                                <option key={tag} value={tag}>{capitalizeFirstLetter(tag)}</option>
                            ))
                        }
                    </Select>
                </Flex>
            </Flex>
            <Flex
                flexDirection={{ md: "row" }}
                flexFlow={{ base: "column wrap" }}
                gap={"40px"}
            >
                {
                    filteredBlogs.map((blog, i) => (
                        <Flex
                            key={i}
                            as={"a"}
                            href={`/blog/${blog.slug}`}
                            w={{ base: "100%", md: "calc(-114.667px + 33.3333vw)" }}
                            gap={8}
                            cursor={"pointer"}
                            flexDirection={"column"}
                            transition={"all 0.5s ease 0s"}
                            _hover={{
                                transform: "scale(1.05)",
                                transition: "all 0.5s ease 0s"
                            }}
                        >
                            <Box
                                display={"flex"}
                                height={"200px"}
                                w={{ base: "100%", md: "calc(-114.667px + 33.3333vw)" }}
                                position={"relative"}
                                overflow={"hidden"}
                                style={{
                                    viewTransitionName: `blog-img-${blog.slug}`
                                }}
                            >
                                <Image
                                    src={blog.img}
                                    alt={blog.title || "Blog article image"}
                                    objectFit="cover"
                                    width={"-webkit-fill-available"}
                                    height={"-webkit-fill-available"}
                                />
                            </Box>

                            <Flex
                                flexDirection={"column"}
                                gap={4}
                            >
                                <Flex
                                    gap={2}
                                    flexDir={"column"}
                                >
                                    <Text fontSize={"14px"} fontWeight={600} color={"primary.600"}>{blog.author} • {new Date(blog.datetime).toLocaleDateString()}, {new Date(blog.datetime).toLocaleTimeString()}</Text>
                                    <Text fontSize={"24px"} fontWeight={600} color={"black"}>{blog.title}</Text>
                                    <Text fontSize={"16px"} fontWeight={400} height={"95px"} overflow={"hidden"} color={"rgb(123, 123, 123)"}>{blog.description}</Text>
                                </Flex>
                                <Flex gap={3} flexWrap={"wrap"}>
                                    {
                                        blog.tags.map(tag => (
                                            <Badge key={tag} textTransform={"none"} px={1} fontSize={"14px"} fontWeight={"bold"} color={"primary.200"} borderRadius={"20px"} p={"3px 15px"}>{tag}</Badge>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>

            <Flex mt={"30px"} pt={"30px"} borderTop={"1px solid rgb(188, 188, 188)"}>
                <Flex justifyContent={"space-between"} gap={2} w={"100%"} >
                    <Flex flex={1}>
                        <Button
                            isDisabled={true}
                            onClick={handlePrevPage}
                            color={"gray.800"}
                            fontSize={"14px"}
                            transition={"all 0.5s"}
                            minW={10}
                            h={10}
                            px={4}
                            gap={2}
                            bg={"transparent"}
                            borderRadius={"50px"}
                            _disabled={{
                                opacity: 0.6,
                                cursor: "not-allowed",
                                boxShadow: "none",
                                pointerEvents: "none"
                            }}
                        >
                            <ArrowBackIcon width={"14px"} height={"14px"} />
                            <Text fontWeight={500}>Anterior</Text>
                        </Button>
                    </Flex>
                    <Flex flex={1} justifyContent={"center"}>
                        {
                            new Array(maxPages).fill(null).map((_, i) => i + 1).map(page => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        handleGoToPage(page)
                                    }}
                                    aria-selected={currentPage === page}
                                    fontWeight={600}
                                    fontSize={"14px"}
                                    transition={"all 0.5s"}
                                    h={10}
                                    minW={10}
                                    px={4}
                                    color={"#7B7B7B"}
                                    borderRadius={"8px"}
                                    bg={"transparent"}
                                    boxShadow={"none"}
                                    _hover={{
                                        border: "1px solid silver"
                                    }}
                                    _active={{
                                        bg: "primary.200_alpha_10",
                                        color: "primary.200"
                                    }}
                                    _disabled={{
                                        opacity: 0.6,
                                        cursor: "not-allowed",
                                        boxShadow: "none",
                                        pointerEvents: "none"
                                    }}
                                    _selected={{
                                        background: "primary.200_alpha_10",
                                        color: "primary.200"
                                    }}
                                >
                                    {page}
                                </Button>
                            ))
                        }
                    </Flex>
                    <Flex flex={1} justifyContent={"flex-end"}>
                        <Button
                            isDisabled={currentPage === maxPages}
                            onClick={handleNextPage}
                            color={"gray.800"}
                            fontSize={"14px"}
                            transition={"all 0.5s"}
                            minW={10}
                            h={10}
                            px={4}
                            gap={2}
                            bg={"transparent"}
                            borderRadius={"50px"}
                            _disabled={{
                                opacity: 0.6,
                                cursor: "not-allowed",
                                boxShadow: "none",
                                pointerEvents: "none"
                            }}
                        >
                            <Text fontWeight={500}>Siguiente</Text>
                            <ArrowForwardIcon width={"14px"} height={"14px"} />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Blog;