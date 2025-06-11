// 원소 데이터
const ELEMENTS_DATA = {
  "elements": [
    {"num": 1, "symbol": "H", "name": "수소", "period": 1, "group": 1, "config": "1s¹", "ionization": 1312.0, "s_electrons": 1, "p_electrons": 0, "unpaired": 1},
    {"num": 2, "symbol": "He", "name": "헬륨", "period": 1, "group": 18, "config": "1s²", "ionization": 2372.3, "s_electrons": 2, "p_electrons": 0, "unpaired": 0},
    {"num": 3, "symbol": "Li", "name": "리튬", "period": 2, "group": 1, "config": "1s² 2s¹", "ionization": 520.2, "s_electrons": 3, "p_electrons": 0, "unpaired": 1},
    {"num": 4, "symbol": "Be", "name": "베릴륨", "period": 2, "group": 2, "config": "1s² 2s²", "ionization": 899.5, "s_electrons": 4, "p_electrons": 0, "unpaired": 0},
    {"num": 5, "symbol": "B", "name": "붕소", "period": 2, "group": 13, "config": "1s² 2s² 2p¹", "ionization": 800.6, "s_electrons": 4, "p_electrons": 1, "unpaired": 1},
    {"num": 6, "symbol": "C", "name": "탄소", "period": 2, "group": 14, "config": "1s² 2s² 2p²", "ionization": 1086.5, "s_electrons": 4, "p_electrons": 2, "unpaired": 2},
    {"num": 7, "symbol": "N", "name": "질소", "period": 2, "group": 15, "config": "1s² 2s² 2p³", "ionization": 1402.3, "s_electrons": 4, "p_electrons": 3, "unpaired": 3},
    {"num": 8, "symbol": "O", "name": "산소", "period": 2, "group": 16, "config": "1s² 2s² 2p⁴", "ionization": 1313.9, "s_electrons": 4, "p_electrons": 4, "unpaired": 2},
    {"num": 9, "symbol": "F", "name": "플루오린", "period": 2, "group": 17, "config": "1s² 2s² 2p⁵", "ionization": 1681.0, "s_electrons": 4, "p_electrons": 5, "unpaired": 1},
    {"num": 10, "symbol": "Ne", "name": "네온", "period": 2, "group": 18, "config": "1s² 2s² 2p⁶", "ionization": 2080.7, "s_electrons": 4, "p_electrons": 6, "unpaired": 0},
    {"num": 11, "symbol": "Na", "name": "나트륨", "period": 3, "group": 1, "config": "1s² 2s² 2p⁶ 3s¹", "ionization": 495.8, "s_electrons": 5, "p_electrons": 6, "unpaired": 1},
    {"num": 12, "symbol": "Mg", "name": "마그네슘", "period": 3, "group": 2, "config": "1s² 2s² 2p⁶ 3s²", "ionization": 737.7, "s_electrons": 6, "p_electrons": 6, "unpaired": 0},
    {"num": 13, "symbol": "Al", "name": "알루미늄", "period": 3, "group": 13, "config": "1s² 2s² 2p⁶ 3s² 3p¹", "ionization": 577.5, "s_electrons": 6, "p_electrons": 7, "unpaired": 1},
    {"num": 14, "symbol": "Si", "name": "규소", "period": 3, "group": 14, "config": "1s² 2s² 2p⁶ 3s² 3p²", "ionization": 786.5, "s_electrons": 6, "p_electrons": 8, "unpaired": 2},
    {"num": 15, "symbol": "P", "name": "인", "period": 3, "group": 15, "config": "1s² 2s² 2p⁶ 3s² 3p³", "ionization": 1011.8, "s_electrons": 6, "p_electrons": 9, "unpaired": 3},
    {"num": 16, "symbol": "S", "name": "황", "period": 3, "group": 16, "config": "1s² 2s² 2p⁶ 3s² 3p⁴", "ionization": 999.6, "s_electrons": 6, "p_electrons": 10, "unpaired": 2},
    {"num": 17, "symbol": "Cl", "name": "염소", "period": 3, "group": 17, "config": "1s² 2s² 2p⁶ 3s² 3p⁵", "ionization": 1251.2, "s_electrons": 6, "p_electrons": 11, "unpaired": 1},
    {"num": 18, "symbol": "Ar", "name": "아르곤", "period": 3, "group": 18, "config": "1s² 2s² 2p⁶ 3s² 3p⁶", "ionization": 1520.6, "s_electrons": 6, "p_electrons": 12, "unpaired": 0},
    {"num": 19, "symbol": "K", "name": "칼륨", "period": 4, "group": 1, "config": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹", "ionization": 418.8, "s_electrons": 7, "p_electrons": 12, "unpaired": 1},
    {"num": 20, "symbol": "Ca", "name": "칼슘", "period": 4, "group": 2, "config": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "ionization": 589.8, "s_electrons": 8, "p_electrons": 12, "unpaired": 0}
  ],
  "confusing_pairs": [
    [3, 4], [6, 7], [11, 12], [14, 15], [2, 3], [4, 5], [5, 6], [8, 9], [10, 11], [13, 14], [16, 17], [18, 19]
  ]
};

// 게임 상태 관리
const gameState = {
  currentMode: null,
  currentElement: null,
  currentPair: null,
  correctAnswers: {
    'period-group': 0,
    'orbital': 0,
    'ionization': 0
  },
  totalQuestions: {
    'period-group': 0,
    'orbital': 0,
    'ionization': 0
  },
  correctAnswer: null,
  userAnswer: null
};

// DOM 요소
const DOM = {
  modeSelector: document.querySelector('.mode-selector'),
  modeButtons: document.querySelectorAll('.mode-btn'),
  gameArea: document.querySelector('.game-area'),
  modeName: document.querySelector('.mode-name'),
  changeModeBtn: document.querySelector('.change-mode-btn'),
  questionTitle: document.querySelector('.question-title'),
  questionContent: document.querySelector('.question-content'),
  
  // 답변 영역
  periodGroupAnswer: document.querySelector('.period-group-answer'),
  orbitalAnswer: document.querySelector('.orbital-answer'),
  ionizationAnswer: document.querySelector('.ionization-answer'),
  
  // 입력 필드
  periodInput: document.getElementById('period-input'),
  groupInput: document.getElementById('group-input'),
  sElectronsInput: document.getElementById('s-electrons-input'),
  pElectronsInput: document.getElementById('p-electrons-input'),
  unpairedInput: document.getElementById('unpaired-input'),
  
  // 이온화 에너지 모드 버튼
  ionizationOptions: document.querySelectorAll('.ionization-option'),
  
  // 결과 및 버튼
  resultArea: document.querySelector('.result-area'),
  resultStatus: document.querySelector('.result-status'),
  resultExplanation: document.querySelector('.result-explanation'),
  submitBtn: document.querySelector('.submit-btn'),
  nextBtn: document.querySelector('.next-btn'),
  
  // 통계 정보
  currentScore: document.getElementById('current-score'),
  accuracy: document.getElementById('accuracy'),
  periodGroupStats: document.getElementById('period-group-stats'),
  orbitalStats: document.getElementById('orbital-stats'),
  ionizationStats: document.getElementById('ionization-stats')
};

// 이벤트 리스너 설정
function setupEventListeners() {
  // 모드 선택 버튼
  DOM.modeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.mode;
      startMode(mode);
    });
  });
  
  // 모드 변경 버튼
  DOM.changeModeBtn.addEventListener('click', () => {
    showModeSelection();
  });
  
  // 제출 버튼 (주기/족, 오비탈 모드)
  DOM.submitBtn.addEventListener('click', checkAnswer);
  
  // 이온화에너지 모드 옵션 버튼
  DOM.ionizationOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      // 선택 효과
      DOM.ionizationOptions.forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      
      // 즉시 정답 확인 (이온화에너지 모드에서만)
      gameState.userAnswer = parseInt(option.dataset.choice);
      checkAnswer();
    });
  });
  
  // 다음 문제 버튼
  DOM.nextBtn.addEventListener('click', () => {
    hideResultArea();
    generateQuestion();
  });
}

// 모드 시작
function startMode(mode) {
  // 기존 모드와 같으면 아무 것도 하지 않음
  if (gameState.currentMode === mode) return;
  
  gameState.currentMode = mode;
  
  // UI 업데이트
  DOM.modeSelector.classList.add('hidden');
  DOM.gameArea.classList.remove('hidden');
  DOM.gameArea.dataset.currentMode = mode;
  
  // 모드별 텍스트 설정
  switch (mode) {
    case 'period-group':
      DOM.modeName.textContent = '주기/족 모드';
      break;
    case 'orbital':
      DOM.modeName.textContent = '오비탈 모드';
      break;
    case 'ionization':
      DOM.modeName.textContent = '이온화에너지 모드';
      break;
  }
  
  // 첫 문제 생성
  generateQuestion();
}

// 모드 선택 화면 표시
function showModeSelection() {
  DOM.gameArea.classList.add('hidden');
  DOM.modeSelector.classList.remove('hidden');
  
  // 결과 영역 숨기기
  hideResultArea();
}

// 현재 모드에 따라 문제 생성
function generateQuestion() {
  clearAnswerInputs();
  
  switch (gameState.currentMode) {
    case 'period-group':
      generatePeriodGroupQuestion();
      break;
    case 'orbital':
      generateOrbitalQuestion();
      break;
    case 'ionization':
      generateIonizationQuestion();
      break;
  }
  
  showAnswerSection();
  updateScoreDisplay();
}

// 주기/족 모드 문제 생성
function generatePeriodGroupQuestion() {
  // 랜덤 원소 선택
  const randomIndex = Math.floor(Math.random() * ELEMENTS_DATA.elements.length);
  gameState.currentElement = ELEMENTS_DATA.elements[randomIndex];
  
  // 문제 표시
  DOM.questionTitle.textContent = '해당 원소의 주기와 족을 입력하세요';
  
  // 원소 기호 표시
  DOM.questionContent.innerHTML = `
    <div class="element-symbol">${gameState.currentElement.symbol}</div>
    <div>${gameState.currentElement.name}</div>
  `;
  
  // 정답 설정
  gameState.correctAnswer = {
    period: gameState.currentElement.period,
    group: gameState.currentElement.group
  };
}

// 오비탈 모드 문제 생성
function generateOrbitalQuestion() {
  // 랜덤 원소 선택
  const randomIndex = Math.floor(Math.random() * ELEMENTS_DATA.elements.length);
  gameState.currentElement = ELEMENTS_DATA.elements[randomIndex];
  
  // 문제 표시
  DOM.questionTitle.textContent = '해당 원소의 오비탈 정보를 입력하세요';
  
  // 원소 기호 표시
  DOM.questionContent.innerHTML = `
    <div class="element-symbol">${gameState.currentElement.symbol}</div>
    <div>${gameState.currentElement.name}</div>
  `;
  
  // 정답 설정
  gameState.correctAnswer = {
    s_electrons: gameState.currentElement.s_electrons,
    p_electrons: gameState.currentElement.p_electrons,
    unpaired: gameState.currentElement.unpaired
  };
}

// 이온화에너지 모드 문제 생성
function generateIonizationQuestion() {
  // 헷갈리는 원소 쌍 중에서 선택
  const randomPairIndex = Math.floor(Math.random() * ELEMENTS_DATA.confusing_pairs.length);
  const pair = ELEMENTS_DATA.confusing_pairs[randomPairIndex];
  
  // 원소 찾기
  const element1 = ELEMENTS_DATA.elements.find(el => el.num === pair[0]);
  const element2 = ELEMENTS_DATA.elements.find(el => el.num === pair[1]);
  
  // 랜덤으로 순서 섞기
  let shuffledPair;
  if (Math.random() > 0.5) {
    shuffledPair = [element1, element2];
  } else {
    shuffledPair = [element2, element1];
  }
  
  gameState.currentPair = shuffledPair;
  
  // 문제 표시
  DOM.questionTitle.textContent = '이온화 에너지가 더 큰 원소를 선택하세요';
  
  // 원소 쌍 표시
  DOM.questionContent.innerHTML = `
    <div class="element-pair">
      <div class="element">${shuffledPair[0].symbol}</div>
      <div class="vs-text">vs</div>
      <div class="element">${shuffledPair[1].symbol}</div>
    </div>
  `;
  
  // 버튼 텍스트 설정
  DOM.ionizationOptions[0].textContent = shuffledPair[0].symbol;
  DOM.ionizationOptions[1].textContent = shuffledPair[1].symbol;
  
  // 클래스 초기화
  DOM.ionizationOptions.forEach(o => o.classList.remove('selected'));
  
  // 정답 설정 (이온화 에너지가 더 큰 원소의 인덱스)
  if (shuffledPair[0].ionization > shuffledPair[1].ionization) {
    gameState.correctAnswer = 0;
  } else {
    gameState.correctAnswer = 1;
  }
}

// 현재 모드에 맞는 답변 영역 표시
function showAnswerSection() {
  // 모든 답변 섹션 숨기기
  DOM.periodGroupAnswer.classList.add('hidden');
  DOM.orbitalAnswer.classList.add('hidden');
  DOM.ionizationAnswer.classList.add('hidden');
  
  // 현재 모드에 맞는 답변 섹션만 표시
  switch (gameState.currentMode) {
    case 'period-group':
      DOM.periodGroupAnswer.classList.remove('hidden');
      break;
    case 'orbital':
      DOM.orbitalAnswer.classList.remove('hidden');
      break;
    case 'ionization':
      DOM.ionizationAnswer.classList.remove('hidden');
      break;
  }
}

// 정답 확인
function checkAnswer() {
  gameState.totalQuestions[gameState.currentMode]++;
  let isCorrect = false;
  
  switch (gameState.currentMode) {
    case 'period-group':
      const periodAnswer = parseInt(DOM.periodInput.value);
      const groupAnswer = parseInt(DOM.groupInput.value);
      
      gameState.userAnswer = { period: periodAnswer, group: groupAnswer };
      isCorrect = periodAnswer === gameState.correctAnswer.period && 
                 groupAnswer === gameState.correctAnswer.group;
      break;
      
    case 'orbital':
      const sElectrons = parseInt(DOM.sElectronsInput.value);
      const pElectrons = parseInt(DOM.pElectronsInput.value);
      const unpaired = parseInt(DOM.unpairedInput.value);
      
      gameState.userAnswer = { 
        s_electrons: sElectrons, 
        p_electrons: pElectrons, 
        unpaired: unpaired 
      };
      
      isCorrect = sElectrons === gameState.correctAnswer.s_electrons && 
                 pElectrons === gameState.correctAnswer.p_electrons && 
                 unpaired === gameState.correctAnswer.unpaired;
      break;
      
    case 'ionization':
      // 이온화 에너지 모드에서는 이미 userAnswer가 설정되어 있음
      isCorrect = gameState.userAnswer === gameState.correctAnswer;
      break;
  }
  
  if (isCorrect) {
    gameState.correctAnswers[gameState.currentMode]++;
  }
  
  showResultArea(isCorrect);
  updateScoreDisplay();
  updateStats();
}

// 결과 영역 표시
function showResultArea(isCorrect) {
  DOM.resultArea.classList.remove('hidden');
  
  if (isCorrect) {
    DOM.resultStatus.textContent = '정답입니다!';
    DOM.resultStatus.className = 'result-status correct';
  } else {
    DOM.resultStatus.textContent = '오답입니다!';
    DOM.resultStatus.className = 'result-status incorrect';
  }
  
  // 모드별 결과 설명
  let explanation = '';
  
  switch (gameState.currentMode) {
    case 'period-group':
      explanation = `
        <h4>${gameState.currentElement.symbol} (${gameState.currentElement.name})의 정보</h4>
        <p>주기: ${gameState.currentElement.period}</p>
        <p>족: ${gameState.currentElement.group}</p>
        <p>전자배치: <span class="config">${gameState.currentElement.config}</span></p>
      `;
      break;
      
    case 'orbital':
      explanation = `
        <h4>${gameState.currentElement.symbol} (${gameState.currentElement.name})의 정보</h4>
        <p>s오비탈에 들어있는 전자수: ${gameState.currentElement.s_electrons}</p>
        <p>p오비탈에 들어있는 전자수: ${gameState.currentElement.p_electrons}</p>
        <p>홀전자수: ${gameState.currentElement.unpaired}</p>
        <p>전자배치: <span class="config">${gameState.currentElement.config}</span></p>
      `;
      break;
      
    case 'ionization':
      const element1 = gameState.currentPair[0];
      const element2 = gameState.currentPair[1];
      
      explanation = `
        <h4>이온화 에너지 비교</h4>
        <p>${element1.symbol} (${element1.name}): ${element1.ionization} kJ/mol</p>
        <p>${element2.symbol} (${element2.name}): ${element2.ionization} kJ/mol</p>
        <p>이온화 에너지 차이: ${Math.abs(element1.ionization - element2.ionization).toFixed(1)} kJ/mol</p>
      `;
      break;
  }
  
  DOM.resultExplanation.innerHTML = explanation;
}

// 결과 영역 숨기기
function hideResultArea() {
  DOM.resultArea.classList.add('hidden');
}

// 입력 필드 초기화
function clearAnswerInputs() {
  DOM.periodInput.value = '';
  DOM.groupInput.value = '';
  DOM.sElectronsInput.value = '';
  DOM.pElectronsInput.value = '';
  DOM.unpairedInput.value = '';
}

// 점수 표시 업데이트
function updateScoreDisplay() {
  const mode = gameState.currentMode;
  DOM.currentScore.textContent = `${gameState.correctAnswers[mode]}/${gameState.totalQuestions[mode]}`;
  
  const accuracyValue = gameState.totalQuestions[mode] > 0 
    ? Math.round((gameState.correctAnswers[mode] / gameState.totalQuestions[mode]) * 100) 
    : 0;
    
  DOM.accuracy.textContent = `${accuracyValue}%`;
}

// 통계 업데이트
function updateStats() {
  function formatStats(mode) {
    const correct = gameState.correctAnswers[mode];
    const total = gameState.totalQuestions[mode];
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return `${correct}/${total} (${accuracy}%)`;
  }
  
  DOM.periodGroupStats.textContent = formatStats('period-group');
  DOM.orbitalStats.textContent = formatStats('orbital');
  DOM.ionizationStats.textContent = formatStats('ionization');
}

// 앱 초기화
function initApp() {
  setupEventListeners();
}

// 앱 시작
document.addEventListener('DOMContentLoaded', initApp);