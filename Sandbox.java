import java.util.Scanner; // Import scanner for input

public class Sandbox {
    public static void main(String[] args) {
        // Output to the console
        System.out.println("What's your name?");

        // Set up input reader
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine(); // Read user input

        // Respond
        System.out.println("Hello, " + name + "! Welcome to Java in VS Code.");

        // Clean up
        scanner.close();
    }
}
