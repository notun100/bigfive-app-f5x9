import { useState } from 'react';

const questions = [{ trait: "개방성", text: "예술 작품이나 음악을 감상하는 것을 얼마나 즐기시나요?" },{ trait: "개방성", text: "새로운 아이디어나 개념에 대해 얼마나 흥미를 느끼시나요?" },{ trait: "개방성", text: "상상력이 풍부하다는 말을 들어본 적이 얼마나 자주 있나요?" },{ trait: "개방성", text: "철학적이거나 추상적인 주제에 대해 대화하는 것을 좋아하시나요?" },{ trait: "개방성", text: "일상 속 변화나 새로움을 선호하는 편인가요?" },{ trait: "개방성", text: "다른 나라의 문화나 전통에 대한 관심이 얼마나 많으신가요?" },{ trait: "성실성", text: "일을 하기 전 계획을 세우는 편인가요?" },{ trait: "성실성", text: "시간 약속을 얼마나 잘 지키는 편인가요?" },{ trait: "성실성", text: "해야 할 일을 미루지 않고 바로 처리하는 편인가요?" },{ trait: "성실성", text: "정리정돈을 잘하는 편인가요?" },{ trait: "성실성", text: "세부적인 부분까지 신경 쓰는 편인가요?" },{ trait: "성실성", text: "정해둔 목표를 끝까지 달성하는 성향이 있나요?" },{ trait: "외향성", text: "낯선 사람과 대화하는 것이 편안한가요?" },{ trait: "외향성", text: "사람들과 함께 있을 때 에너지를 얻는 편인가요?" },{ trait: "외향성", text: "파티나 모임에 자주 참여하고 싶어 하나요?" },{ trait: "외향성", text: "주목받는 상황이 불편하지 않으신가요?" },{ trait: "외향성", text: "활발하고 말이 많은 편인가요?" },{ trait: "외향성", text: "여러 사람과 함께 있을 때 기분이 더 좋아지나요?" },{ trait: "친화성", text: "타인의 감정에 쉽게 공감하는 편인가요?" },{ trait: "친화성", text: "다른 사람을 도와주는 걸 좋아하나요?" },{ trait: "친화성", text: "상대방의 입장을 이해하려 노력하나요?" },{ trait: "친화성", text: "상대방의 말을 경청하는 편인가요?" },{ trait: "친화성", text: "갈등을 피하려고 노력하는 편인가요?" },{ trait: "친화성", text: "협력적인 분위기를 중요하게 생각하시나요?" },{ trait: "신경성", text: "사소한 일에도 불안해지는 경우가 있나요?" },{ trait: "신경성", text: "감정 기복이 심한 편인가요?" },{ trait: "신경성", text: "스트레스를 받으면 쉽게 지치는 편인가요?" },{ trait: "신경성", text: "타인의 평가에 민감하게 반응하는 편인가요?" },{ trait: "신경성", text: "실수나 실패를 자꾸 떠올리는 경향이 있나요?" },{ trait: "신경성", text: "특별한 이유 없이 기분이 우울해질 때가 있나요?" }];

const traits = ["개방성", "성실성", "외향성", "친화성", "신경성"];

export default function BigFiveForm() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (score) => {
    setAnswers([...answers, { ...questions[index], score }]);
    setIndex(index + 1);
  };

  const getResults = () => {
    const result = {};
    traits.forEach(trait => {
      const traitAnswers = answers.filter(a => a.trait === trait).map(a => a.score);
      const sum = traitAnswers.reduce((a, b) => a + b, 0);
      result[trait] = {
        점수: sum,
        해석:
          sum <= 15 ? "낮음 – 해당 성향이 약하게 나타납니다." :
          sum <= 22 ? "중간 – 평균적인 수준입니다." :
                      "높음 – 해당 성향이 뚜렷하게 나타납니다."
      };
    });
    return result;
  };

  if (index >= questions.length) {
    const result = getResults();
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold">검사 결과</h2>
        {traits.map(trait => (
          <div key={trait} className="border rounded-xl p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">{trait}</h3>
            <p>점수: {result[trait].점수}</p>
            <p>{result[trait].해석}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-medium">{questions[index].text}</h2>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map(score => (
          <button
            key={score}
            onClick={() => handleAnswer(score)}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            {score}
          </button>
        ))}
      </div>
    </div>
  );
}
