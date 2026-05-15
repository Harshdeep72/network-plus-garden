# 003 Layer 2 (Data Link Layer)

**Module/Section:**
**Video Length:**

---

![[003 Layer 2 (Data Link Layer).mp4]]

## 📝 Key Concepts
- Data link layer
- MAC
- Isochronous
- Synchronous

## 🧠 Main Takeaways
- At data link Link we : packages the bits we got from layer 1 into package data into frames and transmits those frames on the network.
- **MAC** ( media access control address ) identify device physically every device has one it's a unique 48 bit physical number
		![[Pasted image 20260510220018.png|195]]
		The first 24 bit identify WHO made them ( THE VENDOR)
		The other six digit is unique value (who it is)
- **LLC ( logical link control)** now this provides connection services and allows acknowledgement of reciept of messages.
- LLC is most basic form of flow control , it also provides basic error control functions.
- communication across layer 2 can be synchronized according to
- **Isochronous** : network devices use a common reference clock source and create time slots for transmission.
- **Synchronous** : now here the network device agree to a clocking method to indicate starting and end of frames and can use control characters.
- **Asynchronous** : reference internal clocks and use start and stop bits from synchronization.

- Layer 2 devices includes :
	- network interface cards
	- bridges
	- switch

## ❓ Questions to Review
- what is data link layer?
- what is LLC ?
- what do we do on data link layer?
- what is MAC?
- what is Isochronous and Synchronous?

## 🔗 Related Topics
- [[Networking]]
