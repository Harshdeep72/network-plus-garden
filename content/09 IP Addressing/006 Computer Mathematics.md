# 006 Computer Mathematics

**Module/Section:** 09 IP Addressing
**Tags:** #binary #decimal #ipv4 #subnetting #🌱seedling

---

![[006 Computer Mathematics.mp4]]

## 📖 Core Concept
Computers operate using **Binary** (base-2), while humans typically use **Decimal** (base-10). Because network devices (routers, switches, computers) communicate using electrical signals representing "on" (1) or "off" (0), understanding how to convert between these two numbering systems is fundamental to mastering IPv4 addressing and subnetting.

* **Decimal (Base-10):** Uses 10 digits (0-9). When a column reaches 9, it resets to 0 and carries over to the next column to the left.
* **Binary (Base-2):** Uses 2 digits (0 and 1). Each position represents a power of 2.
* **IPv4 Relationship:** An IPv4 address consists of four octets (e.g., 192.168.1.1). Each octet is 8 bits long, which is why the range for any single octet is 0 to 255.

## 🛠️ Hardware & Devices
N/A — not covered in this lesson.

## 📜 Protocols & Standards
* **IPv4 (Internet Protocol version 4):** Uses 32-bit addresses, typically represented as four decimal octets. Each octet represents 8 binary bits.

## 🔑 Key Terminology
* **Decimal:** A base-10 numbering system using digits 0 through 9.
* **Binary:** A base-2 numbering system using only 0 and 1.
* **Bit:** A single binary digit (either a 0 or a 1).
* **Octet:** A group of 8 bits. In IPv4, an address is composed of four octets.
* **Base-2 Conversion Table:** A reference tool used to convert binary to decimal by assigning powers of 2 to each bit position (from right to left: 1, 2, 4, 8, 16, 32, 64, 128).

## 🔄 How It Works (Processes)

### Converting Binary to Decimal
1. Create a table with 8 columns, filling in the values from right to left: **128, 64, 32, 16, 8, 4, 2, 1**.
2. Place the binary digits into the corresponding columns.
3. Add the values of every column that contains a **1**.
 * *Example:* Binary `10010110`
 * (128*1) + (64*0) + (32*0) + (16*1) + (8*0) + (4*1) + (2*1) + (1*0) = **150**

### Converting Decimal to Binary
1. Use the same 8-column table (128 down to 1).
2. Starting from the left (128), determine if the decimal number is greater than or equal to the column value.
3. If yes, place a **1** in that column and subtract the column value from your current total.
4. If no, place a **0** and move to the next column.
 * *Example:* Decimal `167`
 * 167 - 128 = 39 (1 in 128 column)
 * 39 < 64 (0 in 64 column)
 * 39 - 32 = 7 (1 in 32 column)
 * 7 < 16 (0 in 16 column)
 * 7 < 8 (0 in 8 column)
 * 7 - 4 = 3 (1 in 4 column)
 * 3 - 2 = 1 (1 in 2 column)
 * 1 - 1 = 0 (1 in 1 column)
 * Result: `10100111`

## 📊 Comparisons & Key Differences

| Feature| Decimal| Binary|
| :---| :---| :---|
| **Base**| Base-10| Base-2|
| **Digits Used**| 0, 1, 2, 3, 4, 5, 6, 7, 8, 9| 0, 1|
| **Primary Use**| Human-readable IP addresses| Computer/Network processing|
| **Math Operation**| Standard arithmetic| Addition/Subtraction via powers of 2|

## ⚠️ Exam Tips & Important Notes
* **The Chart is Key:** The instructor emphasizes that you should draw the "128, 64, 32, 16, 8, 4, 2, 1" chart on your scratch paper immediately when starting the exam.
* **Verification:** Always verify your work by converting back to the original format (e.g., if you converted decimal to binary, convert that binary back to decimal to ensure it matches).
* **Range Limit:** Remember that 8 bits (one octet) can represent a maximum value of 255 (128+64+32+16+8+4+2+1).

## ❓ Questions to Review
1. What is the decimal equivalent of the binary number `00001010`?
2. Why is the maximum value of an IPv4 octet 255?
3. If you have the decimal number 200, what is the binary representation?
4. When converting binary to decimal, do you add or subtract the column values?
5. What is the value of the 5th bit from the right in an 8-bit octet?

## 🔗 Related Topics
* [[IPv4 Addressing]]
* [[Subnetting]]
* [[Binary Math]]
