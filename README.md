![Status](https://img.shields.io/badge/status-MVP--WIP-orange)
![License](https://img.shields.io/badge/license-AGPLv3-blue)

# 🚢 Navire – Multi-Channel Notification Orchestrator (MVP – Work in Progress)

**Navire** will be a distributed, multi-channel notification orchestrator written in **Go**.  
Its mission: to centralize, manage, and deliver notifications across multiple platforms, such as **Slack**, **Gotify**, **ntfy**, and **Discord**, through a **unified API** with intelligent routing, priority management, and delivery guarantees.

⚠️ **Status:** MVP - Work in Progress  
This project is currently under active development and not yet production-ready.

> 📌 **Current goal:** Building the Core API and Dispatch worker MVP.  
> ✅ Planned milestone: `v0.0.1` – Basic multi-channel delivery with Slack, Gotify, ntfy, and Discord.


---

## 🌐 Overview

Modern systems rely on dozens of notification channels for deployments, alerts, security incidents, and routine updates. Managing these integrations separately is painful, fragile, and hard to scale.

**Navire** solves this by acting as a **central orchestrator** that:

- Exposes a **single `/notify` API** for sending events
- Dynamically **routes notifications** based on priority, type, and tenant rules
- Handles **retry, backoff, deduplication, and rate limiting**
- Integrates seamlessly with multiple delivery platforms
- Runs in **Docker/Kubernetes** environments with high availability in mind

---

## 🧠 Core Features

- 🔥 **Unified API** – One endpoint to rule them all (`POST /notify`)
- 📡 **Multi-channel delivery** – Slack, Gotify, ntfy, Discord, and more
- ⚙️ **Intelligent routing** – Priority, type, and recipient-based delivery
- ♻️ **Retry & backoff** – Automatic retries with exponential strategies
- 🧩 **Pub/Sub agnostic** – Works with Redis Streams, Kafka, NATS, RabbitMQ, etc.
- 🔐 **Token-based security** – Stateless validation and tenant isolation
- 📊 **Observability-first** – Built-in metrics, structured logging, and tracing
- 🛠️ **Container-native** – Designed for Docker and Kubernetes from day one

---

## 🏗️ Architecture

The system will be built on a **modular, scalable architecture**:

```
[Client] → [Core API] → [Pub/Sub] → [Dispatch Workers] → [Notifiers]

```

- **Core API** – Handles validation, routing logic, authentication, and templating.
- **Pub/Sub Layer** – Decouples ingestion from delivery. Pub/Sub backend is pluggable.
- **Dispatch Workers** – Concurrently send notifications to configured channels.
- **Notifiers** – Platform-specific adapters for Slack, Gotify, ntfy, Discord, etc.

---

## 📊 Roadmap

Check out the [Technical Overview](./docs/TECHNICAL_OVERVIEW.md) for a full architecture breakdown and future roadmap.

---

## 📜 License

This project will be released under the AGPLv3 license once the MVP reaches version `v0.0.1`.

---

## 🤝 Contributing

Contributions will be welcome once the MVP is open-sourced. Stay tuned!

---

## 📬 Contact

For updates, discussions, and technical deep-dives, follow the project here on GitHub.