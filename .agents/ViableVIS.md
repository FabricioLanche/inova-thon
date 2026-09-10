1. **Captación de oportunidades** 

Primero ViableVIS construye una base de terrenos potenciales procedentes de propietarios, brokers, Urbania/Adondevivir, Facebook, scouting propio, mapas u otras fuentes. Cada terreno entra inicialmente con una **Ficha Preliminar**, usando información declarada y todavía **no verificada**: ubicación, área aproximada, precio, frente/fondo, fotos, contacto, construcciones existentes, zonificación declarada si se conoce, etc. Los campos no conocidos no bloquean el registro del terreno.

2. **La inmobiliaria inicia una búsqueda** 

Por ejemplo: Quiero desarrollar vivienda social en **Comas**.

La inmobiliaria configura: 

| Distrito: Comas Área mínima: 2,000 m² Producto: Vivienda social  |
| :---- |

El sistema consulta su base de oportunidades y muestra: 

| 37 terrenos encontrados Mapa \+ lista |
| :---- |

3. **Selecciona candidatos** 

| Terreno A — Comas 3,500 m² S/4.8 M Fuente: propietario  |
| :---- |

**Comienza la generación de prefactibilidad: Generación de Ficha de prefactibilidad.** 

4. **¿Qué puedo construir?**  
   **Agente urbanístico: interpreta parámetros y restricciones.**  
   **Motor de cabida: realiza los cálculos de área construible, área vendible y unidades.**   
   Datos a tomar en cuenta: 

| área altura permitida área libre densidad retiros estacionamientos normativa aplicable parámetros disponibles  geometría |
| :---- |

   **Generación de cabida preliminar no verificada con datos urbanísticos declarados.**

	Ejemplo: 

| Área: 3,500 m² Altura: 8 pisos Área construible estimada: 18,700 m² Área vendible aproximada: 14,800 m²  Cabida preliminar: 231–260 departamentos `Basada en parámetros declarados · no verificados`.  Área promedio del departamento `45 m² ─────●──────── 80 m²` ![][image1] Si por normativa aplicable al proyecto cierto producto no puede bajar de determinado tamaño, aparecería: 🟡 Posible incompatibilidad normativa. Requiere validación documental.  Geometría del terreno ▰ Rectangular Área: 3,500 m² Frente: 42 m Fondo: 84 m Regularidad: Alta Esquina: No Fuente: propietario ⚠️ Geometría no verificada  |
| :---- |

5. **¿Cuánto me puede costar?**  
   **Agente financiero: reúne costos, precios y supuestos.**  
   **Motor financiero: calcula inversión, ingresos, utilidad, margen y precio máximo del terreno.**   
   La empresa cuenta con costos históricos.  
   Ejemplo: Construcción estándar: S/2,100/m².   
   ViableVis calcula automáticamente:  
   18,700 m² × S/2,100 \= S/39.27 M  
   Agrega los costos siguientes a la ficha:

| terreno construcción Nice to have:  diseño/licencias contingencia costos indirectos otros costos parametrizados  |
| :---- |

Produce escenarios: optimistas, base, conservador.

6. **¿Qué tan buena es esa ubicación?**  
   **Trabajo en conjunto de agentes**  
   Los agentes usan fuentes web, mapas, información interna de la inmobiliaria  
1. **Agente de ubicación**

| avenidas transporte colegios universidades hospitales supermercados parques comercio equipamiento urbano  próximos proyectos en la zona (clubs, parques) para potencial de crecimiento en cuanto finaliza el proyecto  |
| :---- |

2. **Agente de mercado**

| proyectos inmobiliarios cercanos precios ofrecidos S//m² tamaños de departamentos dormitorios áreas comunes competencia  |
| :---- |

7. **Consolidación de la información**  
   El **agente de prefactibilidad** es capaz de recibir resultados estructurados de los otros agentes inmobiliarios y compararlos. Configuración de pesos de factores.  
   Por ejemplo: 

| Potencial edificatorio: 84/100 Ubicación: 91/100 Mercado: 82/100 Finanzas preliminares: 76/100  | Viabilidad preliminar: 84/100 Recomendado para continuar evaluación Explica los motivos. Alta conectividad y oferta de servicios. Buena capacidad edificatoria. Precio del suelo relativamente elevado. Competencia inmobiliaria moderada-alta. Se recomienda validar parámetros y situación registral |
| :---- | :---- |

8. **Solicitud de documentos**   
   Si el terreno saco 38/100, ¿por qué gastar tiempo  buscando SUNARP, planos, títulos archivados, etc?  
   En cambio si obtiene 84/100, vale la pena continuar con la evaluación. Por eso, **para validar la oportunidad se agrega la documentación disponible,** así el usuario puede subir:   
- SUNARP/CRI/partida   
- Parámetros urbanísticos  
- Plano perimétrico   
- Memoria descriptiva  
- Otros documentos necesarios  
9. **Validación documental y registral**  
   Se encarga de extraer los siguientes datos:

| extraer propietario área registrada cargas gravámenes hipotecas embargos servidumbres antecedentes relevantes inconsistencias documentales  |
| :---- |

	Se compara con lo declarado inicialmente y se compara. 

| Propietario declarado: Juan Pérez Titular registral: Empresa XYZ 🔴 Inconsistencia  |
| :---- |
| Área declarada: **3,500 m²** Área registral: **3,347 m²** ⚠ Diferencia: **153 m²**  |

**Se actualiza la cabida preliminar con datos verificados, en caso no se cumpla con los parámetros de construcción: 🔴 Configuración no compatible con la normativa identificada**   
**Actualizar información financiera.**   
**Devolver clasificación de estado del predio:** 

- Sin riesgo relevante  
- Requiere revisión/subsanación  
- Riesgo crítico  
10. **Factibilidad de servicios \- Habilitación urbana**  
    Una vez la inmobiliaria selecciona los terrenos considerando la clasificación, se permite la verificación de factibilidad de servicios. Para ello, se carga información técnica de agua, desagüe y electricidad, estima los siguientes datos: 

| distancia hasta conexión infraestructura adicional necesaria longitud aproximada de redes costo preliminar  |
| :---- |

11. **Consolidación financiera: ¿conviene comprar este terreno?**  
    Considerando que se tienen los datos financieros de lo que costaría construir y el precio de departamentos por la zona, se pueden conectar estos datos para calcular el margen preliminar. Por ejemplo:   
    

| Costo total estimado: S/48 M Ingresos proyectados: S/57 M Utilidad preliminar: S/9 M Margen sobre ventas: 15.8 % Retorno preliminar sobre costo: 18.8 %  (A futuro si es que se añade VAN, TIR o más información financiera, permitir calcular algo potente como el precio máximo recomendable a pagar por el terreno) |
| :---- |

    

12. **Prefactibilidad integral \- Evaluación integral del terreno.**   
    Después de validación de distintos frentes, se produce algo como un análisis preliminar completo, para ello la inmobiliaria debería poder configurar la importancia de cada criterio. 

| Terreno A — Comas Prefactibilidad integral: 87/100 — AltaConfianza del análisis: 86% Producto inmobiliario recomendado Departamentos de 50–60 m² 2–3 dormitorios Mix sugerido: 65% de 2 dormitorios / 35% de 3 dormitorios Ticket objetivo: S/X–S/Y Áreas comunes sugeridas: SUM y juegos infantiles Cabida actualizada 238–247 departamentos `Calculada con parámetros documentados` Finanzas Inversión estimada: S/48–52 M Ingresos estimados: S/57–60 M Margen esperado: X–Y% Precio solicitado del terreno: S/4.8 M Precio máximo recomendado: S/4.4 M Fortalezas Excelente conectividad, servicios cercanos, geometría favorable, buena capacidad edificatoria y demanda compatible. Riesgos Servidumbre registrada, precio de suelo elevado y costo adicional para conexión de desagüe. Recomendación🟢 Avanzar a negociaciónCondicionado a revisión de la servidumbre y a obtener un precio de adquisición compatible con la rentabilidad objetivo. |
| :---- |

    En todo el proceso se registra si la información es verificada o no, para el indicador de confianza.

    

[image1]: <data:image/png;base64,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>