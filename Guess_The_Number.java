import java.util.Random;
import java.util.Scanner;

class Game{
    public int number;
    public int inputNumber;

    Game(){
        Random r = new Random();
        this.number = r.nextInt(100);
    }

    public int getNumber() {
        return number;
    }

    public void setInputNumber(int inputNumber) {
        this.inputNumber = inputNumber;
    }

    public void setNoOfGuess(int noOfGuess) {
        this.noOfGuess = noOfGuess;
    }

    public int getNoOfGuess() {
        return noOfGuess;
    }

    public int noOfGuess = 0;

    void takeUserInput(){
        System.out.println("Guess the number :- ");
        Scanner sc = new Scanner(System.in);
        inputNumber = sc.nextInt();
        sc.close();
    }
    
    boolean isCorrectNumber(){
        noOfGuess++;
        if(inputNumber == number){
            System.out.println("You Guess Right");
            System.out.println("number of Attempt :- " + noOfGuess);
        }
        else if(inputNumber < number){
            System.out.println("Too low....");

        }

        else if (inputNumber > number){
            System.out.println("too high.....");
        }

        return false;
    }
}
public class Guess_The_Number {
    public static void main(String[] args) {
       Game g = new Game();
       boolean b = false;
       while(!b){
       g.takeUserInput();
       b = g.isCorrectNumber();
       System.out.println(b);
       }
    }
}

