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
				title: "Algorithm Visualizer",
				description: "Interactive visualization of sorting and pathfinding algorithms",
				tech: ["Python", "Algorithms", "Visualization"],
			},
		],
	},
	{
		category: "Web & Tools",
		color: "accent-primary",
		projects: [
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
				thumbnail: "/projects/transcendence/thumbnail.gif",
				images: [
					"/projects/transcendence/4player.gif",
					"/projects/transcendence/tournament.png",
					"/projects/transcendence/auth.png",
					"/projects/transcendence/leaderboard.png",
				],
				githubLink: "https://github.com/jainavas/transcendence",
			},
			{
				title: "Portfolio Website",
				description: "Personal portfolio built with Next.js and custom design",
				tech: ["Next.js", "TypeScript", "Tailwind"],
			},
			{
				title: "CLI Automation Suite",
				description: "Collection of bash scripts for development workflow automation",
				tech: ["Bash", "Shell Scripting", "DevOps"],
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

	return (
		<>
			<section id="projects" className="py-20 px-4 bg-surface">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-12 text-center text-foreground">My Projects</h2>
					<div className="space-y-16">
						{projectCategories.map((category, catIndex) => (
							<div key={catIndex}>
								<h3 className={`text-2xl font-bold mb-6 text-${category.color} flex items-center gap-3`}>
									<span className={`w-12 h-1 bg-${category.color} rounded`}></span>
									{category.category}
								</h3>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
									{category.projects.map((project, projIndex) => (
										<div
											key={projIndex}
											className="bg-background rounded-lg overflow-hidden border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 group cursor-pointer"
											onClick={() => openModal(project)}
										>
											{/* Thumbnail Image - Larger and more prominent */}
											{project.thumbnail && (
												<div className="relative aspect-video overflow-hidden bg-surface">
													<Image
														src={project.thumbnail}
														alt={`${project.title} preview`}
														fill
														sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
														className="object-cover transition-transform duration-500 group-hover:scale-105"
														unoptimized={project.thumbnail.endsWith('.gif')}
														priority={false}
													/>
													{/* Subtle gradient only at bottom */}
													<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none"></div>

													{/* Title overlay on image */}
													<div className="absolute bottom-0 left-0 right-0 p-4">
														<h4 className="text-lg font-bold text-white drop-shadow-lg group-hover:text-accent-primary transition">
															{project.title}
														</h4>
													</div>
												</div>
											)}

											{/* Compact content area */}
											<div className="p-4">
												{/* Show title here only if no thumbnail */}
												{!project.thumbnail && (
													<h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent-primary transition">
														{project.title}
													</h4>
												)}

												<p className="text-foreground/70 text-sm mb-3 line-clamp-2">
													{project.description}
												</p>

												{/* Tech stack - compact */}
												<div className="flex flex-wrap gap-1.5 mb-3">
													{project.tech.slice(0, 4).map((tech, i) => (
														<span
															key={i}
															className="px-2 py-1 bg-accent-secondary/20 text-accent-secondary rounded text-xs font-medium"
														>
															{tech}
														</span>
													))}
													{project.tech.length > 4 && (
														<span className="px-2 py-1 text-foreground/50 text-xs">
															+{project.tech.length - 4} more
														</span>
													)}
												</div>

												<div className="text-accent-primary hover:text-accent-primary/80 font-semibold text-sm inline-flex items-center gap-1">
													View Details →
												</div>
											</div>
										</div>
									))}
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
