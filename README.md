# 🔑 SSH in GitHub

## Definition

SSH (Secure Shell) ek secure authentication method hai jo local machine ko GitHub se connect karta hai. SSH key pair ka use karke users repositories ko access, push aur pull kar sakte hain bina har baar username aur password enter kiye.

---

## Use

* Secure authentication ke liye
* Git push aur pull operations ke liye
* Password-less login ke liye
* GitHub repositories manage karne ke liye

---

## Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```
## Add SSH Key to GitHub

1. Open GitHub Settings.
2. Click **SSH and GPG Keys**.
3. Click **New SSH Key**.
4. Enter a title.
5. Paste the public key.
6. Click **Add SSH Key**.

---

## Test SSH Connection

```bash
ssh -T git@github.com
```

### Output

```text
Hi username! You've successfully authenticated.
```

---

## Check Current Remote URL

```bash
git remote -v
```

---

## Change HTTPS to SSH

### Syntax

```bash
git remote set-url origin git@github.com:username/repository.git
```

# 👥 Multiple GitHub Accounts on One System Using SSH

## Definition

SSH ki help se ek hi system par multiple GitHub accounts use kiye ja sakte hain. Har GitHub account ke liye alag SSH key generate ki jati hai aur SSH config file ke through unhe manage kiya jata hai.

---

## Use

* Personal aur Work GitHub account ek saath use karna
* Different repositories ko different accounts se manage karna
* Account switching ki zarurat na padna

---

## Generate SSH Keys for Multiple Accounts

### Personal Account

```bash
ssh-keygen -t ed25519 -C "personal@gmail.com" -f ~/.ssh/id_ed25519_personal
```

### Work Account

```bash
ssh-keygen -t ed25519 -C "work@company.com" -f ~/.ssh/id_ed25519_work
```

# 🔐 Difference Between HTTPS and SSH in GitHub

| Feature           | HTTPS                                  | SSH                                              |
| ----------------- | -------------------------------------- | ------------------------------------------------ |
| Full Form         | HyperText Transfer Protocol Secure     | Secure Shell                                     |
| Authentication    | Username + Personal Access Token (PAT) | SSH Key Pair                                     |
| Login Requirement | Credentials enter karne pad sakte hain | One-time SSH setup ke baad login ki zarurat nahi |
| Security          | Secure                                 | More Secure                                      |
| Setup             | Easy                                   | Thoda complex                                    |
| Multiple Accounts | Difficult to manage                    | Easy to manage                                   |
| Automation        | Less convenient                        | Preferred for CI/CD and servers                  |
| Clone URL Example | `https://github.com/user/repo.git`     | `git@github.com:user/repo.git`                   |

---

## HTTPS

### Definition

HTTPS GitHub repositories ko access karne ka ek method hai jisme username aur Personal Access Token (PAT) ke through authentication hoti hai.

### Example

```bash
git clone https://github.com/username/repository.git
```

---

## SSH

### Definition

SSH (Secure Shell) GitHub repositories ko access karne ka ek secure method hai jo SSH key pair ke through authentication provide karta hai.

### Example

```bash
git clone git@github.com:username/repository.git
```

---

## When to Use HTTPS?

* Beginners ke liye
* Quick setup ke liye
* Temporary systems par

### Example

```bash
git push origin main
```

Authentication PAT se hogi.

---

## When to Use SSH?

* Regular GitHub users ke liye
* Multiple GitHub accounts use karne ke liye
* CI/CD pipelines ke liye
* Servers aur automation ke liye

### Example

```bash
git push origin main
```

Authentication SSH key se hogi.

---

## Repository URL Example

### HTTPS

```text
https://github.com/KajalGupta2345/FoodieHub-.git
```

### SSH

```text
git@github.com:KajalGupta2345/FoodieHub-.git
```


---

