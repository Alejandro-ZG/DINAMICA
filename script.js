const characters = {
  david: {
    name: 'David',
    traits: ['valentía', 'adoración', 'liderazgo', 'arrepentimiento', 'dependencia de Dios'],
    summary: 'Un joven pastor llamado por Dios, valiente ante Goliat, adorador y líder. Aunque falló, supo arrepentirse con sinceridad.',
    verse: '1 Samuel 16:7',
    growth: 'Aprender a buscar a Dios con un corazón sincero y valiente.'
  },
  jacob: {
    name: 'Jacob',
    traits: ['proceso', 'perseverancia', 'lucha interna', 'transformación', 'búsqueda de bendición'],
    summary: 'Jacob representa a alguien en proceso. Tuvo luchas, errores y momentos de formación, pero Dios transformó su identidad.',
    verse: 'Génesis 32:28',
    growth: 'Permitir que Dios transforme el carácter, no solo las circunstancias.'
  },
  jose: {
    name: 'José',
    traits: ['fidelidad', 'perdón', 'paciencia', 'integridad', 'propósito'],
    summary: 'José fue fiel en medio de la injusticia. Su historia enseña paciencia, perdón y confianza en el propósito de Dios.',
    verse: 'Génesis 50:20',
    growth: 'Mantener la integridad aunque otros no reconozcan tu esfuerzo.'
  },
  moises: {
    name: 'Moisés',
    traits: ['liderazgo', 'obediencia', 'humildad', 'intercesión', 'dependencia de Dios'],
    summary: 'Moisés fue llamado para guiar al pueblo. Aunque dudó de sí mismo, aprendió a depender de Dios.',
    verse: 'Éxodo 4:12',
    growth: 'Aceptar el llamado de Dios aunque al inicio parezca grande.'
  },
  ester: {
    name: 'Ester',
    traits: ['valentía', 'sabiduría', 'prudencia', 'propósito', 'intercesión'],
    summary: 'Ester mostró valentía y prudencia para actuar en el momento correcto y bendecir a su pueblo.',
    verse: 'Ester 4:14',
    growth: 'Usar la influencia para servir y defender lo correcto.'
  },
  daniel: {
    name: 'Daniel',
    traits: ['fidelidad', 'disciplina', 'oración', 'integridad', 'valor'],
    summary: 'Daniel permaneció fiel en un ambiente difícil. Su vida muestra disciplina espiritual y convicción.',
    verse: 'Daniel 6:10',
    growth: 'Sostener hábitos de oración aunque el entorno presione.'
  },
  pedro: {
    name: 'Pedro',
    traits: ['impulso', 'pasión', 'restauración', 'aprendizaje', 'valentía'],
    summary: 'Pedro fue apasionado e impulsivo. También falló, pero Jesús lo restauró y lo usó con poder.',
    verse: 'Juan 21:17',
    growth: 'Dejar que Cristo restaure los errores y fortalezca la fe.'
  },
  pablo: {
    name: 'Pablo',
    traits: ['misión', 'entrega', 'convicción', 'servicio', 'transformación'],
    summary: 'Pablo tuvo una transformación profunda y vivió con entrega por la misión de compartir el evangelio.',
    verse: 'Filipenses 3:14',
    growth: 'Vivir con propósito y poner los dones al servicio de Dios.'
  },
  rut: {
    name: 'Rut',
    traits: ['lealtad', 'fe', 'humildad', 'servicio', 'constancia'],
    summary: 'Rut representa lealtad y fe en medio de cambios difíciles. Su decisión abrió puertas de bendición.',
    verse: 'Rut 1:16',
    growth: 'Ser constante y fiel aun cuando el camino no sea claro.'
  },
  josue: {
    name: 'Josué',
    traits: ['valentía', 'obediencia', 'liderazgo', 'fe', 'decisión'],
    summary: 'Josué fue llamado a liderar con valentía y obediencia. Su vida invita a decidirse por Dios.',
    verse: 'Josué 1:9',
    growth: 'Tomar decisiones firmes con fe y obediencia.'
  },
  maria: {
    name: 'María',
    traits: ['disposición', 'fe', 'humildad', 'obediencia', 'confianza'],
    summary: 'María respondió con fe al plan de Dios. Su vida refleja humildad y disposición para servir.',
    verse: 'Lucas 1:38',
    growth: 'Responder con confianza cuando Dios pide obediencia.'
  },
  abraham: {
    name: 'Abraham',
    traits: ['fe', 'obediencia', 'paciencia', 'promesa', 'confianza'],
    summary: 'Abraham caminó por fe, aprendiendo a confiar en las promesas de Dios aun sin verlo todo claro.',
    verse: 'Hebreos 11:8',
    growth: 'Obedecer a Dios aunque el camino no esté completamente explicado.'
  },
  salomon: {
    name: 'Salomón',
    traits: ['sabiduría', 'discernimiento', 'liderazgo', 'responsabilidad', 'decisión'],
    summary: 'Salomón pidió sabiduría para dirigir. Su vida recuerda la importancia de decidir bien y cuidar el corazón.',
    verse: '1 Reyes 3:9',
    growth: 'Pedir sabiduría antes de tomar decisiones importantes.'
  },
  nehemias: {
    name: 'Nehemías',
    traits: ['visión', 'trabajo', 'liderazgo', 'oración', 'perseverancia'],
    summary: 'Nehemías oró, planificó y trabajó para reconstruir. Representa visión con acción.',
    verse: 'Nehemías 2:18',
    growth: 'Unir oración, planificación y acción responsable.'
  },
  job: {
    name: 'Job',
    traits: ['paciencia', 'fidelidad', 'resistencia', 'confianza', 'honestidad'],
    summary: 'Job enfrentó dolor sin abandonar completamente su búsqueda de Dios. Enseña fe en medio de pruebas.',
    verse: 'Job 1:22',
    growth: 'Confiar en Dios aun cuando no se entiendan todas las respuestas.'
  },
  samuel: {
    name: 'Samuel',
    traits: ['escucha', 'servicio', 'obediencia', 'sensibilidad espiritual', 'fidelidad'],
    summary: 'Samuel aprendió a escuchar la voz de Dios desde joven y sirvió con fidelidad.',
    verse: '1 Samuel 3:10',
    growth: 'Desarrollar sensibilidad para escuchar y obedecer a Dios.'
  },
  elias: {
    name: 'Elías',
    traits: ['valentía', 'celo espiritual', 'oración', 'dependencia', 'restauración'],
    summary: 'Elías defendió la fe con valentía, pero también necesitó descanso y dirección de Dios.',
    verse: '1 Reyes 18:21',
    growth: 'Servir con valentía sin descuidar la dependencia de Dios.'
  },
  noe: {
    name: 'Noé',
    traits: ['obediencia', 'constancia', 'fe', 'paciencia', 'familia'],
    summary: 'Noé obedeció aunque otros no entendieran. Su historia enseña constancia y fe práctica.',
    verse: 'Génesis 6:22',
    growth: 'Obedecer a Dios aunque no todos comprendan tus decisiones.'
  },
  timoteo: {
    name: 'Timoteo',
    traits: ['juventud', 'servicio', 'aprendizaje', 'fe sincera', 'ejemplo'],
    summary: 'Timoteo fue joven, enseñable y útil en el servicio cristiano. Su vida anima a no menospreciar la juventud.',
    verse: '1 Timoteo 4:12',
    growth: 'Ser ejemplo en conducta, amor, fe y pureza.'
  },
  gedeon: {
    name: 'Gedeón',
    traits: ['inseguridad', 'llamado', 'valentía', 'dependencia', 'crecimiento'],
    summary: 'Gedeón se sintió pequeño, pero Dios lo llamó valiente y lo guió paso a paso.',
    verse: 'Jueces 6:12',
    growth: 'Creer lo que Dios dice de ti más que tus miedos.'
  },
  debora: {
    name: 'Débora',
    traits: ['liderazgo', 'sabiduría', 'valor', 'dirección', 'servicio'],
    summary: 'Débora guió con sabiduría y valentía. Representa liderazgo espiritual y claridad para orientar.',
    verse: 'Jueces 4:14',
    growth: 'Guiar a otros con sabiduría y valentía espiritual.'
  },
  jonas: {
    name: 'Jonás',
    traits: ['huida', 'proceso', 'obediencia tardía', 'misericordia', 'aprendizaje'],
    summary: 'Jonás muestra que a veces Dios debe trabajar nuestras resistencias antes de usarnos para bendecir.',
    verse: 'Jonás 2:9',
    growth: 'Obedecer sin huir de lo que Dios está pidiendo.'
  },
  tomas: {
    name: 'Tomás',
    traits: ['duda', 'sinceridad', 'búsqueda', 'fe', 'encuentro'],
    summary: 'Tomás tuvo dudas sinceras, pero cuando encontró a Cristo respondió con fe profunda.',
    verse: 'Juan 20:28',
    growth: 'Llevar las dudas a Jesús en lugar de alejarse de Él.'
  },
  juan: {
    name: 'Juan',
    traits: ['amor', 'cercanía', 'fidelidad', 'servicio', 'testimonio'],
    summary: 'Juan es recordado por su cercanía con Jesús, su fidelidad y su énfasis en el amor cristiano.',
    verse: '1 Juan 4:7',
    growth: 'Practicar un amor cristiano visible y constante.'
  },
  marta: {
    name: 'Marta',
    traits: ['servicio', 'responsabilidad', 'actividad', 'aprendizaje', 'fe'],
    summary: 'Marta servía con dedicación, pero Jesús también le enseñó a cuidar la prioridad espiritual.',
    verse: 'Lucas 10:41-42',
    growth: 'Servir con excelencia sin olvidar estar cerca de Jesús.'
  }
};

const sensitiveCharacters = new Set([
  'judas', 'judas iscariote', 'cain', 'caín', 'jezabel', 'faraon', 'faraón', 'herodes', 'goliat'
]);

const examples = [
  ['David', 'Jacob'],
  ['Daniel', 'Timoteo'],
  ['Ester', 'Rut'],
  ['José', 'Pedro'],
  ['Josué', 'Gedeón'],
  ['Nehemías', 'Marta'],
  ['Pablo', 'Tomás']
];

const form = document.querySelector('#compareForm');
const result = document.querySelector('#result');
const randomExample = document.querySelector('#randomExample');

function normalizeName(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');
}

function findCharacter(value) {
  const key = normalizeName(value);
  return characters[key] || null;
}

function fallbackCharacter(value) {
  const cleanName = value.trim() || 'Personaje no identificado';
  return {
    name: cleanName,
    traits: ['reflexión', 'proceso', 'aprendizaje', 'carácter', 'crecimiento'],
    summary: 'No encontré este personaje en la lista interna. Aun así, la comparación puede usarse como una reflexión general.',
    verse: 'Filipenses 1:6',
    growth: 'Buscar qué característica bíblica específica se quiere desarrollar.'
  };
}

function calculateScore(desired, perceived) {
  const desiredTraits = desired.traits.map(normalizeName);
  const perceivedTraits = perceived.traits.map(normalizeName);
  const overlap = desiredTraits.filter(trait => perceivedTraits.includes(trait)).length;
  const processTraits = ['proceso', 'transformacion', 'aprendizaje', 'fidelidad', 'fe', 'obediencia', 'perseverancia'];
  const processBonus = perceivedTraits.filter(trait => processTraits.includes(trait)).length;
  const growthBonus = desiredTraits.filter(trait => ['liderazgo', 'valentia', 'servicio', 'sabiduria', 'integridad'].includes(trait)).length;
  const base = 46 + overlap * 8 + processBonus * 3 + growthBonus * 2;
  const variation = (desired.name.length * 3 + perceived.name.length * 5) % 9;
  return Math.max(38, Math.min(92, base + variation));
}

function buildContrast(desired, perceived) {
  if (normalizeName(desired.name) === normalizeName(perceived.name)) {
    return `Ambos apuntan al mismo personaje. Esto puede indicar que lo que admiras también está siendo visto por otros en tu vida, aunque todavía haya espacio para crecer.`;
  }

  return `${desired.name} refleja principalmente ${desired.traits.slice(0, 3).join(', ')}. ${perceived.name} refleja más ${perceived.traits.slice(0, 3).join(', ')}. El contraste no debe verse como crítica, sino como una oportunidad para reconocer dónde estás y hacia dónde puedes crecer con Dios.`;
}

function getSimilarities(desired, perceived) {
  const common = desired.traits.filter(trait => perceived.traits.map(normalizeName).includes(normalizeName(trait)));
  if (common.length > 0) {
    return common.map(trait => `Ambos reflejan ${trait}.`);
  }

  return [
    'Ambos personajes muestran que Dios trabaja con personas reales, con virtudes y procesos.',
    'Ambos pueden enseñar algo sobre crecimiento espiritual y carácter.',
    'La comparación invita a mirar el corazón, no solo la apariencia.'
  ];
}

function renderTags(traits) {
  return traits.map(trait => `<span class="tag">${trait}</span>`).join('');
}

function renderList(items) {
  return items.map(item => `<li>${item}</li>`).join('');
}

function renderWarning(perceivedInput) {
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="result-block warning">
      <h2>Cuidemos el ambiente de la dinámica</h2>
      <p>
        Para evitar burlas o comentarios que puedan herir, es mejor no usar personajes bíblicos asociados
        directamente con traición, violencia o burla para decirle a alguien “te pareces a ${perceivedInput}”.
      </p>
      <p>
        Puedes reformularlo usando personajes de proceso como Jacob, Pedro, Jonás, Tomás o Gedeón, que permiten
        reflexionar sin atacar a la persona.
      </p>
    </div>
  `;
}

function compareCharacters(desiredInput, perceivedInput) {
  const desiredKey = normalizeName(desiredInput);
  const perceivedKey = normalizeName(perceivedInput);

  if (sensitiveCharacters.has(perceivedKey)) {
    renderWarning(perceivedInput);
    return;
  }

  const desired = findCharacter(desiredInput) || fallbackCharacter(desiredInput);
  const perceived = findCharacter(perceivedInput) || fallbackCharacter(perceivedInput);
  const score = calculateScore(desired, perceived);
  const similarities = getSimilarities(desired, perceived);
  const contrast = buildContrast(desired, perceived);

  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="result-header">
      <div class="score-circle" style="--score: ${score}">
        <div>
          <strong>${score}%</strong>
          <span>simbólico</span>
        </div>
      </div>
      <div>
        <h2>Resultado espiritual</h2>
        <p>
          Este porcentaje no define a la persona. Solo ayuda a iniciar una conversación sobre carácter,
          crecimiento y dirección espiritual.
        </p>
      </div>
    </div>

    <div class="character-grid">
      <article class="character-card">
        <div class="label">Personaje que admira</div>
        <div class="name">${desired.name}</div>
        <p>${desired.summary}</p>
        <div class="tags">${renderTags(desired.traits)}</div>
      </article>

      <article class="character-card">
        <div class="label">Personaje que refleja su proceso</div>
        <div class="name">${perceived.name}</div>
        <p>${perceived.summary}</p>
        <div class="tags">${renderTags(perceived.traits)}</div>
      </article>
    </div>

    <div class="result-blocks">
      <div class="result-block">
        <h3>Similitudes</h3>
        <ul>${renderList(similarities)}</ul>
      </div>

      <div class="result-block">
        <h3>Contraste</h3>
        <p>${contrast}</p>
      </div>

      <div class="result-block">
        <h3>Reflexión</h3>
        <p>
          Quizá deseas parecerte a ${desired.name}, pero otros ven en ti rasgos de ${perceived.name}.
          Eso no debe desanimarte: Dios también trabaja en los procesos. Lo importante es permitir que Él forme
          tu carácter paso a paso.
        </p>
      </div>

      <div class="result-block verse">
        <h3>Versículo relacionado</h3>
        <p><strong>${desired.verse}</strong> y <strong>${perceived.verse}</strong></p>
      </div>

      <div class="result-block">
        <h3>Reto de la semana</h3>
        <p>${desired.growth}</p>
      </div>
    </div>
  `;

  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  compareCharacters(data.get('desiredCharacter'), data.get('perceivedCharacter'));
});

randomExample.addEventListener('click', () => {
  const [desired, perceived] = examples[Math.floor(Math.random() * examples.length)];
  document.querySelector('#desiredCharacter').value = desired;
  document.querySelector('#perceivedCharacter').value = perceived;
  compareCharacters(desired, perceived);
});
