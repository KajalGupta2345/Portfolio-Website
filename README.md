# 🔐 Difference Between HTTPS and SSH in GitHub

## Definition

GitHub repositories ko access karne ke liye HTTPS aur SSH dono methods use kiye jate hain. HTTPS secure web connection use karta hai, jabki SSH secure key-based authentication provide karta hai.

---

## Difference Between HTTPS and SSH

| Feature | HTTPS | SSH |
|----------|--------|------|
| Full Form | HyperText Transfer Protocol Secure | Secure Shell |
| Authentication | GitHub Account Credentials | SSH Key Pair |
| Login Requirement | Credentials enter karne pad sakte hain | One-time SSH setup ke baad login ki zarurat nahi |
| Security | Secure | More Secure |
| Setup | Easy | Thoda Complex |
| Multiple Accounts | Difficult to Manage | Easy to Manage |
| Automation | Less Convenient | Preferred for CI/CD and Servers |
| Clone URL Example | `https://github.com/user/repo.git` | `git@github.com:user/repo.git` |

---

# 🌐 HTTPS

## Definition

HTTPS GitHub repositories ko access karne ka ek method hai jisme secure internet connection ke through repository ko access kiya jata hai.

## Configure User

```bash
git config --global user.name "Kajal Gupta"
git config --global user.email "kajal@gmail.com"
```

## Clone Repository

```bash
git clone https://github.com/username/repository.git
```

## Push Changes

```bash
git push origin main
```

## Repository URL Example

```text
https://github.com/KajalGupta2345/FoodieHub-.git
```

---

# 🔑 SSH

## Definition

SSH (Secure Shell) GitHub repositories ko access karne ka ek secure method hai jo SSH key pair ke through authentication provide karta hai.

## Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

### Example

```bash
ssh-keygen -t ed25519 -C "kajal@gmail.com"
```

---

## Start SSH Agent

```bash
eval "$(ssh-agent -s)"
```

---

## Add SSH Key

```bash
ssh-add ~/.ssh/id_ed25519
```

---

## View Public Key

```bash
cat ~/.ssh/id_ed25519.pub
```

---

## Add SSH Key to GitHub

1. Open GitHub Settings
2. Click **SSH and GPG Keys**
3. Click **New SSH Key**
4. Enter Title
5. Paste Public Key
6. Click **Add SSH Key**

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

## Change HTTPS to SSH

### Syntax

```bash
git remote set-url origin git@github.com:username/repository.git
```

### Example

```bash
git remote set-url origin git@github.com:KajalGupta2345/FoodieHub-.git
```

---

## Verify SSH Remote

```bash
git remote -v
```

### Output

```text
origin  git@github.com:KajalGupta2345/FoodieHub-.git
```

---

# 👥 Multiple GitHub Accounts Using SSH

## Definition

SSH ki help se ek hi system par multiple GitHub accounts use kiye ja sakte hain. Har account ke liye alag SSH key generate ki jati hai aur SSH config file ke through manage kiya jata hai.

---

## Generate SSH Keys

### Personal Account

```bash
ssh-keygen -t ed25519 -C "personal@gmail.com" -f ~/.ssh/id_ed25519_personal
```

### Work Account

```bash
ssh-keygen -t ed25519 -C "work@company.com" -f ~/.ssh/id_ed25519_work
```

---

## Add Keys to SSH Agent

```bash
ssh-add ~/.ssh/id_ed25519_personal
ssh-add ~/.ssh/id_ed25519_work
```

---

## Create SSH Config File

File Location:

```text
~/.ssh/config
```

### Configuration

```text
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal

Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_work
```

---

## Test Connections

### Personal Account

```bash
ssh -T git@github-personal
```

### Work Account

```bash
ssh -T git@github-work
```

---

## Clone Repository Using Specific Account

### Personal Account

```bash
git clone git@github-personal:username/repository.git
```

### Work Account

```bash
git clone git@github-work:company/repository.git
```

---

## Repository URL Example

### SSH

```text
git@github.com:KajalGupta2345/FoodieHub-.git
```

---

## Viva Questions

### What is HTTPS?

HTTPS is a secure method used to access GitHub repositories through a web-based connection.

### What is SSH?

SSH (Secure Shell) is a secure authentication method that uses SSH key pairs to access GitHub repositories.

### What is the difference between HTTPS and SSH?

HTTPS uses a secure web connection, while SSH uses SSH keys for authentication. SSH is more secure and convenient for automation, CI/CD pipelines, and managing multiple GitHub accounts.

### Can we use multiple GitHub accounts on the same system using SSH?

Yes. Multiple GitHub accounts can be used on the same system by generating separate SSH keys for each account and configuring them in the SSH config file.
```` 🚀
