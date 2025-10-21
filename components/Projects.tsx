"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface Project {
	title: string;
	description: string;
	longDescription?: string;
	tech: string[];
	features?: string[];
	thumbnail?: string; // Main preview image/GIF for the card
	images?: string[]; // Gallery images shown in modal
	githubLink?: string;
	liveLink?: string;
}

const projectCategories: Array<{
	category: string;
	color: string;
	projects: Project[];
}> = [
		{
			category: "Systems & Graphics",
			color: "accent-primary",
			projects: [
				{
					title: "cub3D - Raycasting Engine",
					description: "A minimalist 3D graphics engine inspired by Wolfenstein 3D that renders 3D scenarios from 2D maps using raycasting",
					longDescription: `A complete 3D graphics engine written in C that implements raycasting to create real-time 3D environments from 2D maps. Inspired by the classic Wolfenstein 3D, this project demonstrates fundamental 3D rendering techniques without modern graphics APIs.

The engine uses the Digital Differential Analyzer (DDA) algorithm for efficient ray-grid traversal and implements proper texture mapping with support for different wall textures per direction. Maps are defined through custom .cub configuration files that specify textures, colors, and layout.

Built as a 42 School project with a focus on performance, achieving stable 60 FPS through optimized rendering and minimal API calls. The modular architecture separates concerns across game loop, graphics, input handling, and map parsing.`,
					tech: ["C", "Raycasting", "X11", "MiniLibX"],
					features: [
						"Real-time 3D rendering using raycasting algorithm",
						"Digital Differential Analyzer (DDA) for ray-grid traversal",
						"Full wall texturing with XPM format support (North, South, East, West)",
						"Configurable maps via .cub files with flood-fill validation",
						"Fluid player controls with collision detection",
						"Optimized to run at stable ~60 FPS",
						"Modular codebase following 42 School coding standards",
					],
					thumbnail: "/projects/cub3d/thumbnail.gif",
					images: [
						"/projects/cub3d/gameplay.gif",
						"/projects/cub3d/textures.png",
						"/projects/cub3d/map-editor.png",
						"/projects/cub3d/raycasting.png",
					],
					githubLink: "https://github.com/jainavas/cub3d",
				},
				{
					title: "Minishell - Bash Reimplementation",
					description: "POSIX-compliant shell implementing command parsing, pipelines, redirections, and signal handling with strict memory management",
					longDescription: `A from-scratch implementation of a Unix shell in C, replicating core Bash functionality
with emphasis on process management, I/O redirection, and signal handling. Built as a 42 School
project requiring strict adherence to coding standards and zero memory leaks.

Core technical challenges solved:

- Advanced Lexer/Parser Pipeline: Custom tokenization system handling complex shell grammar including
  quote contexts (single/double), variable expansion timing, and whitespace handling. Implements
  multi-pass parsing: lexical analysis → syntax validation → AST construction → execution planning.
  Properly distinguishes between literal strings, expandable variables, and command substitutions
  based on quote context.

- Process Management & IPC: Multi-process pipeline execution using fork()/execve() with bidirectional
  pipe() chains. Implements proper file descriptor management across process boundaries—each child
  receives correct stdin/stdout via dup2() manipulation. Handles zombie process prevention through
  waitpid() with proper exit status collection for $? variable.

- I/O Redirection Engine: Complete implementation of <, >, >>, and << (heredoc) operators with
  proper precedence handling. Heredoc implementation uses temporary file descriptors with delimiter
  matching, supporting variable expansion within heredoc content. Handles multiple redirections per
  command with left-to-right evaluation semantics.

- Signal Handling Architecture: Non-trivial signal management for interactive shell behavior—SIGINT
  (Ctrl-C) clears current line without exit, SIGQUIT (Ctrl-\\) ignored in interactive mode, EOF
  (Ctrl-D) triggers clean exit. Implements different signal behaviors during command execution vs
  interactive prompt, using minimal global variables to maintain signal state across contexts.

- Environment & Variable Management: Dynamic environment variable storage with efficient lookup for
  $VAR expansion. Implements export/unset built-ins modifying environment state, with proper memory
  reallocation. Tracks $? exit status across command sequences, updating after each pipeline execution.

- Built-in Command Integration: Seven built-ins (echo, cd, pwd, export, unset, env, exit) executed
  in parent process to modify shell state. cd implements path resolution with OLDPWD tracking,
  echo handles -n flag parsing, exit validates numeric arguments with proper error codes.

The shell handles edge cases like empty pipes, multiple redirections, unclosed quotes, and maintains
zero memory leaks (Valgrind-verified, excluding readline library) through systematic allocation tracking.`,
					tech: [
						"C",
						"POSIX System Calls",
						"Process Management",
						"File Descriptors",
						"Signal Handling",
						"Lexer/Parser",
						"Abstract Syntax Trees",
						"Readline Library",
						"Unix IPC"
					],

					features: [
						"Custom lexer/parser with multi-pass pipeline: tokenization → AST → execution",
						"Multi-process pipeline execution with fork()/execve() and bidirectional pipe() chains",
						"Complete I/O redirection: input (<), output (>), append (>>), heredoc (<<) with proper precedence",
						"Environment variable expansion ($VAR, $?) with quote-aware context handling",
						"Signal management: SIGINT/SIGQUIT/EOF with different behaviors for interactive vs execution modes",
						"Seven built-in commands: echo (-n flag), cd (with OLDPWD), pwd, export, unset, env, exit",
						"Heredoc implementation with delimiter matching and variable expansion support",
						"Proper file descriptor management: dup2() manipulation, leak prevention, cleanup on errors",
						"Zombie process prevention via waitpid() with exit status collection for $? tracking",
						"Zero memory leaks (Valgrind-verified) with systematic allocation/deallocation tracking",
						"Quote handling: single quotes (literal), double quotes (expansion), nested contexts",
						"Path resolution: $PATH binary lookup, absolute/relative path execution, permission validation"
					],
					thumbnail: "/projects/minishell/thumbnail.png",
					images: [
						"/projects/minishell/demo.gif",
						"/projects/minishell/pipelines.png",
						"/projects/minishell/redirections.png",
						"/projects/minishell/builtins.png",
					],
					githubLink: "https://github.com/jainavas/minishell",
				},
			],
		},
		{
			category: "AI & Algorithms",
			color: "accent-secondary",
			projects: [
				{
					title: "Gomoku AI",
					description: "Five-in-a-row game with intelligent AI opponent using minimax algorithm with alpha-beta pruning for optimal decision-making",
					longDescription: `Advanced Gomoku AI engine implementing competitive game-playing algorithms in C++. 
The system achieves sub-500ms decision-making through aggressive optimization 
strategies, reducing search complexity from ~30 seconds to ~100ms per move.

Core technical challenges solved:

- Zobrist Hashing: Implemented incremental O(1) state hashing vs O(361) naive 
  recalculation, enabling efficient position caching and duplicate detection across 
  the game tree.

- Transposition Table: 64MB cache with aging-based replacement strategy, achieving 
  40-60% hit rates and preventing redundant subtree evaluations. Implements exact/
  bound node discrimination for precise alpha-beta integration.

- Advanced Move Ordering: Geometric evaluation system that prioritizes forcing 
  sequences (win threats, captures, pattern formations) to maximize pruning 
  efficiency, reducing evaluated nodes by ~60%.

- Sophisticated Heuristic Function: Multi-layered position evaluation considering 
  pattern recognition (4-open, 4-half, 3-open), capture opportunities, threat 
  detection, and strategic positioning. Weights tuned empirically for competitive play.

- Complex Rule Enforcement: Implemented intricate Gomoku variants including capture 
  mechanics, double free-three prohibition, and endgame capture validation—requiring 
  non-trivial pattern matching across 8 directions with gap detection.

The AI demonstrates strong tactical play through 6-ply lookahead with adaptive depth 
adjustment, evaluating ~5k-20k positions per move while maintaining real-time 
responsiveness.`,
					tech: [
						"C++17",
						"SFML Graphics",
						"Minimax Algorithm",
						"Alpha-Beta Pruning",
						"Zobrist Hashing",
						"Transposition Tables",
						"Pattern Recognition",
						"Heuristic Optimization"
					],

					features: [
						"Zobrist hashing for O(1) incremental state updates vs O(n²) recalculation",
						"64MB transposition table with aging-based replacement achieving 40-60% hit rates",
						"Intelligent move ordering reducing search space by ~60% through threat prioritization",
						"Multi-layered heuristic evaluation with pattern recognition (4-open, 3-open, captures)",
						"Adaptive depth search (4-6 ply) based on game phase for consistent sub-500ms responses",
						"Complex rule enforcement: capture mechanics, double free-three detection, endgame validation",
						"Real-time performance metrics: nodes evaluated, cache efficiency, decision time",
						"SFML-based GUI with visual feedback for AI suggestions and game state"
					],
					thumbnail: "/projects/gomoku/thumbnail.gif",
					images: [
						"/projects/gomoku/ai-thinking.gif",
						"/projects/gomoku/game-board.png",
						"/projects/gomoku/pattern-detection.png",
						"/projects/gomoku/performance.png",
					],
					githubLink: "https://github.com/jainavas/gomoku",
				},
				{
					title: "Leaffliction - Plant Disease Classification",
					description: "Deep learning computer vision system classifying plant diseases from leaf images with 94% accuracy using CNN and advanced data augmentation",
					longDescription: `Production-ready plant disease classification system built as a 42 School machine learning project. Implements end-to-end computer vision pipeline from raw dataset to deployed model, achieving 94% validation accuracy across 8 disease classes using PyTorch and custom data augmentation strategies.

Core technical challenges solved:

- Imbalanced Dataset Management: Handled severe class imbalance (ranging 300-1,200 images per class) through intelligent augmentation. Implemented 6 distinct augmentation techniques (flip, rotation, skew, shear, crop, distortion) with configurable parameters, generating synthetic samples to balance dataset while preserving original image quality and avoiding artificial patterns that could bias the model.

- Custom CNN Architecture: Designed deep convolutional neural network with residual connections inspired by ResNet principles. Network consists of 5 convolutional blocks with batch normalization and dropout (p=0.5) for regularization, progressively increasing feature maps (64→128→256→512→1024) while reducing spatial dimensions. Global average pooling eliminates fully connected layer overhead, reducing parameters from ~50M to ~8M while maintaining accuracy.

- Advanced Data Augmentation Pipeline: Built systematic augmentation system preserving filename conventions for traceability. Each technique configurable via command-line arguments with validation to prevent destructive transformations. Implements sophisticated algorithms: perspective transforms for skew/shear, affine transformations for rotation, elastic distortions simulating natural leaf deformations. Batch processing capabilities handle 2,000+ images with progress tracking.

- Image Transformation Pipeline: Integrated PlantCV library for biological image analysis. Implements multi-stage pipeline: Gaussian blur for noise reduction → HSV color space masking for leaf segmentation → ROI detection isolating leaf regions → object analysis extracting morphological features → pseudolandmark identification for spatial feature extraction → color histogram analysis capturing disease-specific pigmentation patterns. Each transformation configurable via CLI flags.

- Transfer Learning with Fine-Tuning: Implemented ResNet50 backbone pretrained on ImageNet, replacing final classification layer for 8-class output. Applied progressive unfreezing strategy: initially train only final layers, then gradually unfreeze deeper layers with decreasing learning rates (1e-3 → 1e-4 → 1e-5), preventing catastrophic forgetting while adapting features to plant pathology domain. Achieved 20% accuracy improvement vs training from scratch.

- Training Pipeline Engineering: Custom PyTorch Dataset class with lazy loading and in-memory caching for I/O optimization. Learning rate scheduling with ReduceLROnPlateau monitoring validation loss, coupled with early stopping (patience=10 epochs) preventing overfitting. Implements mixed precision training (torch.cuda.amp) reducing GPU memory consumption by 40% and accelerating training by 2x on compatible hardware.

- Robust Inference System: Prediction script with confidence thresholding and top-3 class output for ambiguous cases. Automatic preprocessing pipeline ensuring input images match training distribution (resize, normalize, tensor conversion). Generates visual output with predicted class, confidence scores, and bounding boxes highlighting analyzed regions. Handles edge cases: non-leaf images, multiple leaves, damaged/occluded samples.

- Dataset Integrity & Reproducibility: SHA1 signature verification system preventing dataset corruption and ensuring reproducibility across evaluation environments. Automated dataset exploration generating statistical reports (distribution charts, class imbalance metrics, resolution histograms) guiding preprocessing decisions. Comprehensive logging tracks every training metric: loss curves, accuracy evolution, confusion matrices, per-class precision/recall.

The system demonstrates production-grade ML engineering: from data quality assurance to model deployment, handling real-world challenges like class imbalance, limited data, and domain-specific feature extraction—delivering accurate plant disease diagnostics applicable to agricultural automation and precision farming.`,
					tech: [
						"Python",
						"PyTorch",
						"Computer Vision",
						"CNN",
						"Transfer Learning",
						"ResNet50",
						"Data Augmentation",
						"PlantCV",
						"PIL/OpenCV",
						"Matplotlib",
						"NumPy",
						"Scikit-learn",
						"CUDA",
					],

					features: [
						"94% validation accuracy on 8-class plant disease classification (Apple/Grape diseases)",
						"Custom ResNet-inspired CNN with 5 convolutional blocks and residual connections",
						"Intelligent class balancing: 6 augmentation techniques (flip, rotate, skew, shear, crop, distortion)",
						"Transfer learning with ResNet50 backbone fine-tuned on plant pathology dataset",
						"Advanced image preprocessing: Gaussian blur, HSV masking, ROI detection, color histogram analysis",
						"Mixed precision training reducing GPU memory by 40% and doubling training speed",
						"Learning rate scheduling with ReduceLROnPlateau and early stopping (patience=10)",
						"Batch processing pipeline handling 2,000+ images with progress tracking and error recovery",
						"Real-time inference with confidence scoring and top-3 class predictions",
						"Comprehensive metrics logging: loss curves, confusion matrices, per-class accuracy",
						"Dataset integrity verification via SHA1 signatures ensuring reproducibility",
						"Automated dataset analysis: distribution charts, imbalance detection, resolution profiling",
						"PlantCV integration for biological feature extraction and leaf segmentation",
						"CLI tools with argparse for flexible configuration and automation",
						"Zero memory leaks with proper resource cleanup and GPU memory management"
					],
					thumbnail: "/projects/leaffliction/thumbnail.png",
					images: [
						"/projects/leaffliction/training-progress.png",
					],
					githubLink: "https://github.com/jainavas/leaffliction",
				},
				{
					title: "Lem-in - Ant Colony Pathfinding",
					description: "Graph optimization solver that moves ant colonies through tunnel networks using multi-path BFS and flow distribution algorithms",
					longDescription: `Advanced graph pathfinding and optimization system that solves the challenge of moving ant colonies through complex room networks in minimum time. Implements sophisticated algorithms for multi-path discovery and optimal resource distribution, demonstrating practical applications of graph theory and flow optimization.

Core technical challenges solved:

- Multi-Path BFS Algorithm: Custom breadth-first search implementation that discovers all possible paths simultaneously from start to end nodes. Unlike standard BFS that finds a single path, this system explores the entire solution space to identify multiple disjoint paths, enabling parallel ant movement. Implements efficient path deduplication and cycle detection to avoid redundant route exploration.

- Optimal Ant Distribution: NP-hard optimization problem requiring intelligent resource allocation across multiple paths. Implemented greedy distribution algorithm with O(P × A) complexity that minimizes total completion time by balancing path lengths against ant counts. Each distribution decision considers cumulative flow through the network, preventing bottlenecks and ensuring maximum throughput.

- Flow Network Simulation: Step-by-step ant movement engine with collision detection and room occupancy tracking. Implements flow control logic ensuring no two ants occupy the same room (except start/end), requiring careful sequencing of moves across parallel paths. Achieves conflict-free movement scheduling through lookahead validation and dynamic path adjustment.

- Graph Validation & Parsing: Robust input parser handling complex room-tunnel specifications with comprehensive validation. Detects duplicate rooms, invalid connections, coordinate conflicts, and ensures graph connectivity between start/end nodes. Implements flood-fill validation to verify solvability before path computation begins.

- Dynamic Memory Management: Efficient allocation strategies for graph structures scaling to 10,000+ nodes. Custom memory pooling for rooms, connections, and path storage with automatic cleanup preventing leaks. Implements overflow protection for integer operations during large-scale graph processing.

- Interactive Visualization System: Python-based graph renderer using matplotlib with anti-overlap line algorithms for readable complex networks. Displays discovered paths with color coding, ant distribution statistics, and real-time simulation playback. Implements smart edge routing to separate parallel connections, preventing visual clutter in dense graphs.

The system demonstrates practical graph algorithm engineering: from theoretical pathfinding concepts to production-ready simulation handling large-scale networks with 1000+ rooms, 3000+ connections, achieving solutions in <50ms for complex scenarios.`,
					tech: [
						"C",
						"Graph Algorithms",
						"BFS Pathfinding",
						"Flow Optimization",
						"Python",
						"Matplotlib",
						"Dynamic Memory",
						"Algorithm Visualization"
					],

					features: [
						"Multi-path BFS discovering all optimal routes simultaneously with O(V + E) complexity per path",
						"Smart ant distribution algorithm minimizing total completion time through greedy optimization",
						"Flow network simulation with collision detection ensuring conflict-free ant movement",
						"Comprehensive graph validation: duplicate detection, connectivity checks, solvability verification",
						"Dynamic memory management scaling efficiently to 10,000+ node networks",
						"Robust input parser handling complex room-tunnel specifications with error recovery",
						"Python visualizer with interactive graphs showing paths, distribution, and simulation playback",
						"Anti-overlap line rendering for readable visualization of dense parallel connections",
						"Performance benchmarks: <50ms solution time for 1000+ room networks",
						"Path deduplication and cycle detection preventing redundant route exploration",
						"Flood-fill validation ensuring start-to-end connectivity before computation",
						"Real-time statistics: rooms, connections, paths found, steps required, completion time"
					],
					thumbnail: "/projects/lem-in/thumbnail.png",
					images: [
						"/projects/lem-in/intricate.png",
						"/projects/lem-in/visualizer.png",
						"/projects/lem-in/cli.png",
					],
					githubLink: "https://github.com/jainavas/lem-in",
				},
				{
					title: "Push_swap - Stack Sorting Optimizer",
					description: "Efficient sorting algorithm using two stacks and a limited set of operations, implementing the Turkish Algorithm for optimal move calculation",
					longDescription: `A sophisticated stack sorting program that orders integers using only two stacks and a restricted set of operations. The challenge lies in minimizing the number of moves while maintaining algorithmic efficiency, making it an exercise in optimization and algorithmic thinking.

Core technical challenges solved:

- Turkish Algorithm Implementation: Cost-based optimization that calculates the "price" (number of operations) to place each element in its correct position. The algorithm evaluates all possible move sequences and executes the most efficient one, achieving optimal sorting with minimal operations.

- Dual-Stack Management: Orchestrates movement between stacks 'a' and 'b' using 11 distinct operations (sa, sb, ss, pa, pb, ra, rb, rr, rra, rrb, rrr). Each operation must be carefully chosen to progress toward the sorted state while minimizing total move count.

- Move Optimization Strategies: Implements rotation consolidation (using rr/rrr instead of separate ra/rb when possible), pivot-based partitioning for larger datasets, and specialized handling for small arrays (2-5 elements) with hardcoded optimal sequences.

- Performance Benchmarks: Achieves sorting of 100 random integers in <700 operations and 500 integers in <5,500 operations, meeting strict 42 School performance requirements. Extensive testing ensures consistent performance across edge cases.

- Input Validation: Robust error handling for duplicate numbers, integer overflow/underflow, invalid arguments, and malformed input. All errors output "Error\\n" to stderr per project specifications.

- Memory Management: Zero memory leaks verified through Valgrind, with proper cleanup of linked list structures representing both stacks. Systematic allocation tracking prevents resource leaks.

The program demonstrates practical algorithm engineering: from theoretical optimization concepts to production-ready implementation handling large datasets efficiently, showcasing mastery of data structures and algorithmic problem-solving.`,
					tech: [
						"C",
						"Algorithm Optimization",
						"Stack Data Structures",
						"Cost Calculation",
						"Move Optimization",
						"Linked Lists",
						"Performance Analysis"
					],

					features: [
						"Turkish Algorithm: cost-based optimization calculating cheapest move sequences for O(n) elements",
						"Dual-stack orchestration with 11 operations: swap (sa/sb/ss), push (pa/pb), rotate (ra/rb/rr, rra/rrb/rrr)",
						"Performance targets: <700 ops for 100 elements, <5,500 ops for 500 elements",
						"Rotation consolidation: intelligent use of combined operations (rr/rrr) to reduce total moves",
						"Specialized small-array handling: optimal hardcoded sequences for 2-5 elements",
						"Pivot-based partitioning strategy for efficient handling of large datasets",
						"Comprehensive input validation: duplicates, overflow/underflow, invalid format detection",
						"Zero memory leaks with proper linked list cleanup and systematic resource management",
						"Position index tracking for optimal element placement calculations",
						"Edge case handling: single element, empty array, already sorted, reverse sorted",
						"Cost function evaluation: considers both rotation and push costs in decision making",
						"Makefile with proper compilation, no relink, and ASCII art visualizations"
					],
					thumbnail: "/projects/pushswap/thumbnail.gif",
					images: [
					],
					githubLink: "https://github.com/jainavas/pushswap",
				},
				{
					title: "Philosophers - Dining Philosophers Problem",
					description: "Multithreaded simulation of the classic dining philosophers problem with mutex-based synchronization and precise timing",
					longDescription: `A complete implementation of the classic Dining Philosophers Problem demonstrating advanced multithreading, synchronization, and deadlock prevention. Built as a 42 School project emphasizing concurrent programming mastery with strict timing constraints and zero tolerance for race conditions.

Core technical challenges solved:

- Thread-Based Concurrency: Each philosopher runs as an independent pthread, alternating between thinking, eating, and sleeping states. Proper thread lifecycle management with pthread_create/pthread_join ensures clean startup and shutdown without resource leaks or zombie threads.

- Mutex-Based Synchronization: Forks (shared resources) protected by pthread_mutex to prevent simultaneous access. Implements careful lock ordering strategy—even-numbered philosophers pick right fork first, odd-numbered pick left first—breaking circular wait condition and preventing deadlock.

- Precise Timing Requirements: Death detection must occur within 10ms of starvation. Uses gettimeofday for microsecond-precision timing combined with usleep for accurate delays. Custom bettersleep function periodically checks for starvation during sleep periods, ensuring timely death detection.

- Race Condition Prevention: All shared data access protected by mutexes with strict lock/unlock discipline. Thread-safe logging ensures message ordering integrity—no interleaved output corruption. Simulation termination flag uses mutex protection to coordinate clean shutdown across all threads.

- Deadlock Prevention Strategy: Fork acquisition follows consistent ordering based on philosopher ID. Even philosophers take right-then-left, odd take left-then-right, ensuring no circular resource dependencies. Handles single-philosopher edge case where deadlock is inevitable.

- Starvation Monitoring: Each philosopher tracks time since last meal. Monitoring thread (or periodic checks) detects when time_to_die threshold exceeded, immediately setting death flag and terminating simulation with proper "died" message output.

- Edge Case Handling: Single philosopher with one fork (immediate death), philosophers with meals_to_eat=0 (instant completion), very short time_to_die values requiring aggressive checking frequency.

- Clean Resource Management: Proper mutex initialization/destruction, memory allocation/deallocation, thread cleanup. Zero memory leaks verified through Valgrind excluding readline library allocations.

The simulation achieves stable concurrent execution with 5-200 philosophers, maintaining timing precision and deadlock-free operation under all valid input conditions, demonstrating production-grade concurrent system design.`,
					tech: [
						"C",
						"POSIX Threads (pthread)",
						"Mutex Synchronization",
						"Concurrent Programming",
						"Timing & Precision",
						"Deadlock Prevention",
						"Race Condition Handling",
						"Thread-Safe Logging"
					],

					features: [
						"Thread-per-philosopher architecture with pthread_create/pthread_join lifecycle management",
						"Mutex-protected fork resources preventing simultaneous access and data races",
						"Deadlock prevention: even philosophers take right-first, odd take left-first fork ordering",
						"Precise timing: gettimeofday + usleep achieving <10ms death detection accuracy",
						"Custom bettersleep with periodic starvation checks during sleep cycles",
						"Thread-safe logging with mutex-protected printf preventing message interleaving",
						"Simulation control flags coordinating clean shutdown across all threads",
						"Starvation monitoring tracking time_since_last_meal for each philosopher",
						"Edge case handling: single philosopher, zero meals requirement, extreme timing values",
						"Zero memory leaks with proper mutex/thread cleanup and systematic resource management",
						"Circular philosopher arrangement using doubly-linked list or array structures",
						"Support for 1-200 philosophers with configurable time_to_die, time_to_eat, time_to_sleep",
						"Optional meals_to_eat parameter terminating simulation when all philosophers reach target",
						"Real-time state logging: timestamp [ms] philosopher_id action (taken fork, eating, sleeping, thinking, died)",
						"Valgrind-verified: no memory leaks, no data races, no undefined behavior"
					],
					thumbnail: "/projects/philosophers/thumbnail.png",
					images: [
					],
					githubLink: "https://github.com/jainavas/philosophers",
				},
			],
		},
		{
			category: "Web & Tools",
			color: "accent-primary",
			projects: [
				{
					title: "Inception - Containerized WordPress Stack",
					description: "Fully containerized WordPress environment with MariaDB, Nginx, and SSL, orchestrated with Docker Compose and automated deployment",
					longDescription: `Complete infrastructure-as-code project deploying a production-ready WordPress stack using Docker containerization. Built as a 42 School system administration project emphasizing DevOps practices, service orchestration, and security configurations without relying on pre-built Docker images.

Core technical achievements:

- Multi-Container Architecture: Three custom Docker images (MariaDB, WordPress with PHP-FPM, Nginx) communicating through isolated Docker network. Each service runs in dedicated container with proper resource isolation and minimal attack surface following security best practices.

- Custom Dockerfile Engineering: From-scratch Debian 11 base images with manual service installation and configuration. No DockerHub pre-built application images—demonstrates understanding of containerization fundamentals, layer optimization, and image size minimization through multi-stage builds.

- MariaDB Initialization: Automated database setup via bash script executing SQL commands during container startup. Creates database, user accounts with proper privileges, configures UTF-8 encoding, and implements secure root password handling via environment variables.

- WordPress Automation: WP-CLI integration for zero-touch WordPress installation. Script downloads WordPress core, generates wp-config.php with database credentials, installs site with admin user, creates additional author user, and activates theme—all without manual intervention.

- Nginx SSL Configuration: OpenSSL-generated self-signed certificates for HTTPS enforcement. Custom nginx.conf implements reverse proxy to PHP-FPM (port 9000), TLS 1.2/1.3 protocols, secure cipher suites, and proper FastCGI parameter passing for WordPress routing.

- Docker Compose Orchestration: Defines service dependencies (WordPress depends_on MariaDB), volume mounts for persistent data (/home/user/data/mariadb, /home/user/data/wordpress), network configuration, and health checks ensuring services start in correct order.

- Makefile Automation: Streamlines entire workflow—automatic /etc/hosts modification, directory creation, docker-compose up with build flags, clean removal of containers/volumes/images, and service-specific commands (up-wordpress, build-nginx). Loads environment variables from .env file.

- Security Best Practices: No hardcoded credentials (all via .env), separate database user with minimal privileges, HTTPS-only communication, container running as non-root user where possible, and secure secret handling through environment injection.

- Persistent Data Management: Docker volumes mounted to host filesystem ensuring database and WordPress content survive container restarts. Proper permissions and ownership configured via initialization scripts.

- Environment Configuration: Comprehensive .env file defines all deployment parameters—domain name, database credentials, WordPress admin/author credentials, enabling environment-specific deployments (dev/staging/prod) without code changes.

The project demonstrates practical DevOps engineering: from Dockerfile optimization to orchestration patterns, achieving reproducible infrastructure deployment with security-first mindset—production-ready WordPress hosting on bare metal or cloud VMs.`,
					tech: [
						"Docker",
						"Docker Compose",
						"Nginx",
						"MariaDB",
						"WordPress",
						"PHP-FPM",
						"WP-CLI",
						"Bash Scripting",
						"OpenSSL",
						"Makefile",
						"Infrastructure as Code",
						"DevOps"
					],

					features: [
						"Three custom Dockerfiles building from Debian 11: MariaDB, WordPress+PHP-FPM, Nginx services",
						"Docker Compose orchestration with service dependencies, health checks, and automatic restart policies",
						"Automated MariaDB initialization: database creation, user setup, privilege grants, UTF-8 encoding",
						"WP-CLI-powered WordPress installation: core download, wp-config generation, user creation, theme activation",
						"Nginx SSL/TLS configuration with OpenSSL self-signed certificates enforcing HTTPS-only access",
						"FastCGI integration: Nginx reverse proxy to PHP-FPM 7.4 on port 9000 for dynamic WordPress content",
						"Persistent Docker volumes mounted to ~/data/mariadb and ~/data/wordpress for data durability",
						"Makefile automation: /etc/hosts modification, volume creation, compose up/down, clean removal",
						"Environment-based configuration via .env: domain, database credentials, WordPress accounts",
						"Security hardening: no hardcoded secrets, minimal container privileges, separate database users",
						"Isolated Docker network (jainavasnet) with inter-container DNS resolution",
						"Service-specific commands: up-mariadb, build-nginx, logs for targeted container management",
						"Zero-touch deployment: single 'make all' command from clone to running HTTPS WordPress site",
						"Clean uninstall: 'make clean' removes containers, images, volumes, networks, and data directories",
						"Production-ready: stable 60+ hours uptime, proper error handling, graceful shutdown procedures"
					],
					thumbnail: "/projects/inception/thumbnail.png",
					images: [
					],
					githubLink: "https://github.com/jainavas/inception",
				},
				{
					title: "ft_transcendence - Multiplayer Pong Platform",
					description: "Full-stack multiplayer Pong game with 3D graphics, real-time gameplay, tournament system, and comprehensive authentication",
					longDescription: `Complete web application serving as the 42 School final project—a modern interpretation
of Pong with advanced multiplayer capabilities and 3D graphics. Built as a single-page application
demonstrating end-to-end full-stack development with emphasis on real-time networking, security,
and modern web technologies.

Core technical achievements:

- Real-Time Multiplayer Architecture: WebSocket-based game synchronization supporting 4 concurrent
  players with client-side prediction and server reconciliation. Handles state management across
  distributed clients with <50ms latency, ensuring fluid gameplay despite network conditions.

- 3D Graphics Engine: Babylon.js integration for hardware-accelerated rendering pipeline. Implements
  custom physics calculations for ball trajectories, paddle collisions, and boundary detection with
  60 FPS target performance. Responsive canvas scaling maintains aspect ratios across devices.

- Authentication & Security: Multi-layered security implementing OAuth 2.0 (Google Sign-In) alongside
  traditional credentials, 2FA with TOTP, HTTPS enforcement, bcrypt password hashing, and comprehensive
  input sanitization preventing SQL injection and XSS attacks. Session management with secure HTTP-only
  cookies.

- Tournament System: Complex bracket generation with automatic match scheduling, score tracking, and
  elimination logic. Persistent state management handles disconnections gracefully, allowing tournament
  continuation without data loss.

- Backend Architecture: Fastify-based microservices with modular route handlers, middleware chains for
  authentication/validation, and SQLite for relational data persistence. RESTful API design following
  OpenAPI specifications with comprehensive error handling.

- Infrastructure & DevOps: Docker Compose orchestration with multi-stage builds optimizing image sizes
  (~200MB final). Grafana + Prometheus integration for real-time metrics monitoring (request rates,
  response times, error rates). Environment-based configuration for seamless dev/prod deployment.

The application demonstrates practical full-stack engineering: from low-level WebSocket protocol
handling to high-level UI/UX considerations, achieving a production-ready multiplayer gaming platform.`,
					tech: [
						"TypeScript",
						"Node.js",
						"Fastify",
						"WebSockets",
						"Babylon.js",
						"SQLite",
						"Docker",
						"Tailwind CSS",
						"OAuth 2.0",
						"2FA/TOTP",
						"Grafana",
						"Prometheus",
						"Webpack"
					],

					features: [
						"Real-time 4-player multiplayer with WebSocket synchronization maintaining <50ms latency",
						"3D game rendering using Babylon.js with hardware-accelerated graphics pipeline at 60 FPS",
						"OAuth 2.0 authentication (Google Sign-In) with fallback to traditional credentials",
						"Two-factor authentication using TOTP with QR code generation for enhanced security",
						"Tournament bracket system with automatic scheduling, elimination logic, and persistent state",
						"Comprehensive security: HTTPS enforcement, bcrypt hashing, SQL injection prevention, XSS protection",
						"User profiles with statistics tracking: wins/losses, match history, ELO-style rankings",
						"Docker containerization with multi-stage builds optimizing deployment to ~200MB images",
						"Grafana + Prometheus monitoring for real-time performance metrics and observability",
						"Single-page application (SPA) architecture with client-side routing and lazy loading",
						"Responsive design supporting desktop and tablet gameplay with adaptive canvas scaling",
						"Modular backend architecture with separation of concerns across authentication, game logic, and data layers"
					],
					thumbnail: "/projects/transcendence/4player.gif",
					images: [
						"/projects/transcendence/thumbnail.gif",
						"/projects/transcendence/tournament.png",
						"/projects/transcendence/auth.png",
						"/projects/transcendence/leaderboard.png",
					],
					githubLink: "https://github.com/jainavas/transcendence",
				},
			],
		},
	];

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedProject(null), 300);
	};

	const handleScroll = (categoryIndex: number, direction: 'left' | 'right') => {
		const container = document.getElementById(`category-${categoryIndex}`);
		if (container) {
			const scrollAmount = direction === 'left' ? -400 : 400;
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<>
			<section id="projects" className="py-20 bg-surface">
				<div className="max-w-[1600px] mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center text-foreground">My Projects</h2>
					<div className="space-y-16">
						{projectCategories.map((category, catIndex) => (
							<div key={catIndex}>
								<h3 className={`text-2xl font-bold mb-6 text-${category.color} flex items-center gap-3 px-4`}>
									<span className={`w-12 h-1 bg-${category.color} rounded`}></span>
									{category.category}
								</h3>

								{/* Horizontal scrolling container with hover navigation */}
								<div className="relative group/category">
									{/* Left scroll button */}
									<button
										onClick={() => handleScroll(catIndex, 'left')}
										className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-accent-primary/20 rounded-full p-3 opacity-0 group-hover/category:opacity-100 transition-opacity shadow-lg"
										aria-label="Scroll left"
									>
										<svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
										</svg>
									</button>

									{/* Right scroll button */}
									<button
										onClick={() => handleScroll(catIndex, 'right')}
										className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background border border-accent-primary/20 rounded-full p-3 opacity-0 group-hover/category:opacity-100 transition-opacity shadow-lg"
										aria-label="Scroll right"
									>
										<svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</button>

									{/* Scrollable container */}
									<div
										id={`category-${catIndex}`}
										className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 pb-4"
										style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
									>
										{category.projects.map((project, projIndex) => (
											<div
												key={projIndex}
												className="flex-shrink-0 w-[400px] bg-background rounded-lg overflow-hidden border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 group cursor-pointer"
												onClick={() => openModal(project)}
											>
												{/* Thumbnail Image - Much bigger */}
												{project.thumbnail && (
													<div className="relative h-[300px] overflow-hidden bg-surface">
														<Image
															src={project.thumbnail}
															alt={`${project.title} preview`}
															fill
															sizes="400px"
															className="object-cover transition-transform duration-500 group-hover:scale-105"
															unoptimized={project.thumbnail.endsWith('.gif')}
															priority={false}
														/>
														{/* Subtle gradient only at bottom */}
														<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none"></div>

														{/* Title overlay on image */}
														<div className="absolute bottom-0 left-0 right-0 p-5">
															<h4 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-accent-primary transition">
																{project.title}
															</h4>
														</div>
													</div>
												)}

												{/* Compact content area */}
												<div className="p-5">
													{/* Show title here only if no thumbnail */}
													{!project.thumbnail && (
														<h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent-primary transition">
															{project.title}
														</h4>
													)}

													<p className="text-foreground/70 text-sm mb-4 line-clamp-3">
														{project.description}
													</p>

													{/* Tech stack - compact */}
													<div className="flex flex-wrap gap-2 mb-4">
														{project.tech.slice(0, 4).map((tech, i) => (
															<span
																key={i}
																className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary rounded text-xs font-medium"
															>
																{tech}
															</span>
														))}
														{project.tech.length > 4 && (
															<span className="px-3 py-1 text-foreground/50 text-xs">
																+{project.tech.length - 4} more
															</span>
														)}
													</div>

													<div className="text-accent-primary hover:text-accent-primary/80 font-semibold text-sm inline-flex items-center gap-2">
														View Details →
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{selectedProject && (
				<ProjectModal
					isOpen={isModalOpen}
					onClose={closeModal}
					project={selectedProject}
				/>
			)}
		</>
	);
}
