export const chatData = [
  {
    id: '1',
    message: 'How may we be helpful for you?',
    trigger: '2'
  },
  {
    id: '2',
    options: [
      {
        value: 1,
        label: 'I want to know more information about WeForHealth',
        trigger: '3'
      },
      { value: 2, label: 'I want to meet a therapist', trigger: '7' }
    ]
  },
  {
    id: '3',
    message: `Thank you for your interest in us. WeforHealth is the online platform where drug
    meet therapists to get assistance anonymously. If you have further questions do not hesitate
    to contact us on 445678
    `,
    trigger: '4'
  },
  {
    id: '4',
    message: 'Is there anything else can we assist you with?',
    trigger: '5'
  },
  {
    id: '5',
    options: [
      {
        value: 1,
        label: 'No, thanks',
        trigger: '6'
      },
      { value: 2, label: 'I want to meet a therapist', trigger: '7' }
    ]
  },
  {
    id: '6',
    message: 'Thank you for contacting us. We are always here for your help!',
    end: true
  },
  {
    id: '7',
    message: `Thank you for this decision you made. The first step to stop addiction is to
    realize that you have the problem. `,
    trigger: '8'
  },
  {
    id: '8',
    message: `If you don't mind let us ask you few questions to know more about your situation`,
    trigger: '9'
  },
  {
    id: '9',
    message: 'Which type of drugs are you addicted to?',
    trigger: '10'
  },
  {
    id: '10',
    options: [
      {
        value: 1,
        label: 'Marijuana',
        trigger: '12'
      },
      {
        value: 2,
        label: 'Cocaine',
        trigger: '12'
      },
      {
        value: 3,
        label: 'Mention other',
        trigger: '11'
      }
    ]
  },
  {
    id: '11',
    user: true,
    trigger: '12'
  },
  {
    id: '12',
    message: `It is good to know. Can we have your name please?`,
    trigger: '13'
  },
  {
    id: '13',
    user: true,
    trigger: '14'
  },
  {
    id: '14',
    message: 'How log have you been taking drugs?',
    trigger: '15'
  },
  {
    id: '15',
    user: true,
    trigger: '16'
  },
  {
    id: '16',
    message: 'How would you like to have therapy session?',
    trigger: '17'
  },
  {
    id: '17',
    options: [
      {
        value: 1,
        label: 'Video call',
        trigger: '18'
      },
      {
        value: 2,
        label: 'Voice call',
        trigger: '18'
      },
      {
        value: 3,
        label: 'Chat',
        trigger: '18'
      }
    ]
  },
  {
    id: '18',
    message: `Thank you for your information! Wait few seconds, 
    we are trying to connect you with a therapist.`,
    end: true
  }
];
