# Setup

### 1. Install Git

- Windows:

  [Git for Windows/x64 Setup](https://git-scm.com/install/windows)

- Ubuntu:

  ```
  sudo apt install git
  ```

Check Version

```
git -v
```

---

### 2. Install nvm

- Windows:

  [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)

- Ubuntu:

  [nvm version](https://github.com/nvm-sh/nvm/releases) (replace `< version >` with `vx.x.x`)

  ```
  sudo apt install curl
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/< version >/install.sh | bash
  ```

Check Version

```
nvm -v
```

---

### 3. Install Node.js & npm

[Version Released](https://nodejs.org/en/about/previous-releases)

```
nvm install < version >
nvm use < version >
```

Check Version

```
node -v
npm -v
```

---

### 4. Install Mysql

- Windows:

  [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/)

  Add `C:\Program Files\MySQL\MySQL Server 8.0\bin` to PATH

- Ubuntu:

  ```
  sudo apt install mysql-server
  ```

Check Version

```
mysql --version
```

---

### 5. Configure Mysql

- Windows:

  ```
  mysql -u root -p
  ```

- Ubuntu:

  ```
  sudo mysql
  ```

```
CREATE USER '<username>'@'<ip>' IDENTIFIED BY '<password>';
CREATE DATABASE <database>;
GRANT ALL PRIVILEGES ON <database>.* TO '<username>'@'<ip>';
FLUSH PRIVILEGES;
exit
```

---

### 6. Install Dependencies

```
npm install
```

---

### 7. Sequelize CLI

- .env

  ```
  MYSQL_DATABASE=<database>
  MYSQL_USERNAME=<username>
  MYSQL_PASSWORD=<password>
  MYSQL_HOST=<host>
  MYSQL_PORT=<port>
  ```

- create database

  ```
  npx sequelize db:create
  ```

- create model + migration

  ```
  npx sequelize model:generate \
  --name test \
  --attributes name:string \
  --underscored
  ```

- migrate

  ```
  npx sequelize db:migrate
  ```

- create seeder

  ```
  npx sequelize seed:generate --name tests
  ```

- seed data

  ```
  npx sequelize db:seed:all
  ```

---

### 8. Run

```
npm run dev
```

---
