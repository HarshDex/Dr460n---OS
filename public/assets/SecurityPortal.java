import java.util.*;

class SecurityPortal {
    public static void main(String args[]) {
        SecurityPortal vaultDoor = new SecurityPortal();
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the vault password: ");
        String userInput = scanner.next();
        scanner.close();
        String input = userInput.substring("ctf{".length(), userInput.length() - 1);
        if (vaultDoor.checkPassword(input))
            System.out.println("Access granted.");
        else
            System.out.println("Access denied!");
    }

    public boolean checkPassword(String password) {
        if (password.length() != 32)
            return false;
        char[] buffer = new char[32];
        int i;
        for (i = 0; i < 8; i++)
            buffer[i] = password.charAt(i);
        for (; i < 16; i++)
            buffer[i] = password.charAt(23 - i);
        for (; i < 32; i += 2)
            buffer[i] = password.charAt(46 - i);
        for (i = 31; i >= 17; i -= 2)
            buffer[i] = password.charAt(i);
        String s = new String(buffer);
        return s.equals("H3yS_tUp3r_s3cr3t_4gent");
    }
}