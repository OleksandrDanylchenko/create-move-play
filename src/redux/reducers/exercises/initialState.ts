import { IExercise } from './index';

export const availableExercises: IExercise[] = [
  {
    name: 'Відтискання',
    photoUrl:
      'http://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/push-up.png',
    popularity: 95,
    shortDescription:
      "Базова фізична вправа, що розвиває великий грудний м'яз і трицепс. Також при виконанні вправи залучені передні дельтоподібні м'язи, ліктьовий м'яз та плечовий пояс в цілому.",
    primaryMuscle: 'Грудні',
    secondaryMuscles: ['Лікті', 'Тріцепс'],
    level: 'Початківець',
    incompatibleDiseases: ['legsDystrophy']
  },
  {
    name: 'Прес',
    photoUrl:
      'https://www.fitstream.com/images/bodyweight-training/bodyweight-exercises/sit-up-large.png',
    popularity: 93,
    shortDescription: "Класична вправа для розвитку сили черевних м'язів",
    primaryMuscle: 'Черевні',
    secondaryMuscles: [],
    level: 'Початківець',
    incompatibleDiseases: ['arteriesHypertensia']
  },
  {
    name: 'Згинання рук',
    photoUrl:
      'https://www.fitstream.com/images/weight-training/exercises/barbell-bicep-curl.png',
    popularity: 84,
    shortDescription:
      'Базова вправа для розвитку сили та збільшення розміру біцепсів.',
    primaryMuscle: 'Біцепс',
    secondaryMuscles: ['Передпліччя'],
    level: 'Початківець',
    incompatibleDiseases: []
  },
  {
    name: 'Станова тяга',
    photoUrl:
      'https://www.fitstream.com/images/weight-training/exercises/deadlift-one.png',
    popularity: 60,
    shortDescription:
      "Базова силова вправа, що виконується развитой зі штангою, а також з гантеллю або гирею. Рекомендована для тих хто бажає наростити м'язеву масу та силу рук, спини й ніг.",
    primaryMuscle: 'Спина',
    secondaryMuscles: [
      'Передпліччя',
      'Ікри',
      'Підколінні сухожилля',
      'Квадрицепси'
    ],
    level: 'Досвідчений',
    incompatibleDiseases: ['arteriesHypertensia', 'legsDystrophy']
  }
];
