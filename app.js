const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions = ['rock','paper','scissors'];
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            })
        })

        options.forEach(option=>{
            option.addEventListener('click',function(){
                const random = Math.floor(Math.random()*computerOptions.length);
                const computerChoice = computerOptions[random];
                setTimeout(() => {
                    compareHand(this.textContent,computerChoice);

                    playerHand.src = `${this.textContent}.png`;
                    computerHand.src = `${computerChoice}.png`; 
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHand = (playerChoice,computerChoice)=>{
        const result = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            result.textContent = "It is a tie";
            
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                result.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                result.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                result.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                result.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                result.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                result.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }




    startGame();
    playMatch();
};

game();