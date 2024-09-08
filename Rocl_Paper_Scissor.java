import java.util.Random;
import java.util.Scanner;

public class Rocl_Paper_Scissor {
     public static void main(String[] args) {
        Random Ram = new Random();
        Scanner sc = new Scanner(System.in);
        int i = 0;
        int comp_win = 0;
        int you_win = 0;
        while (i < 5) {
            int ram = Ram.nextInt(2);

            System.out.println("Pick one :-");
            System.out.println("0. Rock \n1. Scissor \n2. Paper");
            System.out.println("Enter Your choice:- ");
            int choice = sc.nextInt();

            if (ram == 0 && choice == 0 || ram == 1 && choice == 1 || ram == 2 && choice == 2) {
                System.out.println("Draw");
            }

            else if (ram == 0 && choice == 1 || ram == 1 && choice == 2 || ram == 2 && choice == 0) {
                System.out.println("Computer Win");
                comp_win++;
            }

            else if (ram == 0 && choice == 2 || ram == 1 && choice == 0 || ram == 2 && choice == 1) {
                System.out.println("you Win");
                you_win++;
            }

            System.out.println("Computer chose the " + ram);
            System.out.println();
            i++;
        }

        if (you_win > comp_win) {
            System.out.println(" Final Result :- You win");
        }

        else if (comp_win > you_win) {
            System.out.println("Final Result :- Computer win");
        }

        else {
            System.out.println("Final Result :- Draw");
        }

        sc.close();

    }
}
