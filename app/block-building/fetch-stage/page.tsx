'use client';

import { TwitterCard } from "@/app/ui/twittercard"
import { VideoCard } from "@/app/ui/videocard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileDocumentation } from "@/app/ui/file-documentation"
import { BlockBuildingMap } from "@/app/ui/block-building-map"
import { usePathname } from 'next/navigation'

export default function FetchStagePage() {
    const pathname = usePathname();

    const files = [
        {
            filePath: "quic-client/src/nonblocking/quic_client.rs",
            role: "Implements a nonblocking QUIC client that connects to UDP ports and provides an interface for sending data with flow control.",
            functions: [{
                name: "new_with_client",
                description: "Creates a new QUIC client connection",
                inputs: [
                    { name: "client: Arc<QuicClient>", description: "The QUIC client instance" },
                    { name: "stats: Arc<ConnectionCacheStats>", description: "Connection cache statistics" }
                ],
                outputs: ["Self"],
                codeSnippet: { language: "rust", code: "pub fn new_with_client(client: Arc<QuicClient>, stats: Arc<ConnectionCacheStats>) -> Self {\n    // Creates a new QUIC client connection\n}" }
            }]
        },
        {
            filePath: "quic-client/src/lib.rs",
            role: "Provides the main interface for the QUIC client library, including connection pooling and management.",
            functions: [{
                name: "new_quic_connection_cache",
                description: "Creates a new QUIC connection cache",
                inputs: [
                    { name: "name: &'static str", description: "Cache name" },
                    { name: "keypair: &Keypair", description: "Node keypair" },
                    { name: "ipaddr: IpAddr", description: "IP address" },
                    { name: "staked_nodes: &Arc<RwLock<StakedNodes>>", description: "Staked nodes info" },
                    { name: "connection_pool_size: usize", description: "Pool size" }
                ],
                outputs: ["Result<QuicConnectionCache, ClientError>"],
                codeSnippet: { language: "rust", code: "pub fn new_quic_connection_cache(...) -> Result<QuicConnectionCache, ClientError> {\n    // Creates a new QUIC connection cache\n}" }
            }]
        },
        {
            filePath: "quic-client/src/quic_client.rs",
            role: "Implements a blocking QUIC client that connects to UDP ports and provides an interface for sending data.",
            functions: [{
                name: "send_data",
                description: "Sends data over QUIC connection",
                inputs: [{ name: "data: &[u8]", description: "The data to send" }],
                outputs: ["TransportResult<()>"],
                codeSnippet: { language: "rust", code: "pub fn send_data(&self, data: &[u8]) -> TransportResult<()> {\n    // Sends data over QUIC connection\n}" }
            }]
        },
        {
            filePath: "core/src/banking_stage/transaction_scheduler/scheduler_controller.rs",
            role: "Controls the flow of packets and transactions into the scheduler and manages scheduling execution.",
            functions: [{
                name: "run",
                description: "Main loop for processing transactions",
                inputs: [],
                outputs: [],
                codeSnippet: { language: "rust", code: "pub fn run(&mut self) {\n    // Main loop for processing transactions\n}" }
            }]
        },
        {
            filePath: "core/src/banking_stage/transaction_scheduler/receive_and_buffer.rs",
            role: "Defines traits and implementations for receiving and buffering transactions.",
            functions: [{
                name: "receive_and_buffer_packets",
                description: "Receives and buffers packets for processing",
                inputs: [
                    { name: "bank: &Bank", description: "Reference to the bank" },
                    { name: "container: &mut Container", description: "Mutable reference to the container" }
                ],
                outputs: ["BufferPacketsResult"],
                codeSnippet: { language: "rust", code: "fn receive_and_buffer_packets(&mut self, bank: &Bank, container: &mut Container) -> BufferPacketsResult {\n    // Receives and buffers packets for processing\n}" }
            }]
        },
        {
            filePath: "streamer/src/nonblocking/quic.rs",
            role: "Implements a nonblocking QUIC server for receiving transactions.",
            functions: [{
                name: "spawn_server",
                description: "Spawns a QUIC server",
                inputs: [
                    { name: "name: &'static str", description: "Server name" },
                    { name: "sock: UdpSocket", description: "UDP socket" },
                    { name: "keypair: &Keypair", description: "Node keypair" },
                    { name: "packet_sender: Sender<PacketBatch>", description: "Packet sender channel" },
                    { name: "exit: Arc<AtomicBool>", description: "Exit signal" },
                    { name: "staked_nodes: Arc<RwLock<StakedNodes>>", description: "Staked nodes info" },
                    { name: "quic_server_params: QuicServerParams", description: "Server parameters" }
                ],
                outputs: ["Result<SpawnNonBlockingServerResult, QuicServerError>"],
                codeSnippet: { language: "rust", code: "pub fn spawn_server(...) -> Result<SpawnNonBlockingServerResult, QuicServerError> {\n    // Spawns a QUIC server\n}" }
            }]
        }
    ];

    const summary = {
        title: "Summary",
        content: `The fetch stage in the TPU involves receiving transactions via QUIC, buffering them, and scheduling them for processing. The QUIC implementation provides efficient, secure, and flow-controlled data transfer, while the transaction scheduler manages the flow of transactions through the system. The QUIC client connects to validators to send transactions, while the QUIC server receives transactions from clients and other validators. The transaction scheduler then processes these transactions, making decisions about which ones to process, forward, or drop based on various factors such as stake, load, and bank state.`
    };

    const relevantPaths = [
        "agave/quic-client/src/nonblocking/quic_client.rs",
        "agave/quic-client/src/lib.rs",
        "agave/quic-client/src/quic_client.rs",
        "agave/core/src/banking_stage/transaction_scheduler/scheduler_controller.rs",
        "agave/core/src/banking_stage/transaction_scheduler/receive_and_buffer.rs",
        "agave/streamer/src/nonblocking/quic.rs"
    ];

    const relevantPackages = [
        { path: "agave/quic-client", package: "solana-quic-client" },
        { path: "agave/core", package: "solana-core" },
        { path: "agave/streamer", package: "solana-streamer" }
    ];

    return (
        <div>
            <div className="bg-background-hero">
                <div className="container mx-auto p-12 gap-12 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-6 text-white">Fetch Stage</h1>
                        <Button className="bg-primary-color hover:bg-primary-color/80">
                            <Link href="/block-building/fetch-stage" className="w-full">
                                Clone Fetch Stage to your repo
                            </Link>
                        </Button>
                    </div>

                    <div className="flex justify-center w-full">
                        <BlockBuildingMap />
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto p-8 max-w-7xl">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-9">
                        <div>
                        <div className="mt-8 mb-12">
                        <p className="whitespace-pre-wrap text-lg mb-4">{summary.content}</p>
                           
                        </div>
                            <h2 className="text-2xl font-bold mb-4">Relevant Agave File Paths</h2>
                            <ul className="list-disc pl-4">
                                {files.map((file) => (
                                    <li key={file.filePath}>
                                        <a href={`#${file.filePath.replace(/\//g, '-')}`} className="text-blue-600 hover:underline">
                                            {file.filePath}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="mt-8 space-y-8">
                            {files.map((file) => (
                                <FileDocumentation 
                                    key={file.filePath}
                                    {...file}
                                />
                            ))}
                        </div>

                      

                        

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Relevant Packages by File Path</h2>
                            <ul className="list-none">
                                {relevantPackages.map(({ path, package: pkg }) => (
                                    <li key={path} className="mb-2">
                                        <span className="font-mono text-gray-600">{path}</span>
                                        <br />
                                        <span className="font-mono text-blue-600">{pkg}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex flex-col gap-4">
                            <VideoCard
                                title="Fetch Stage by Joe C"
                                description="This video covers the Fetch Stage in the TPU, including the role of the TPU Entry Notifier, TPU, Banking Stage, Repair Service, and more."
                                thumbnailUrl="/Solana_Title.jpg"
                                videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            />
                            <TwitterCard
                                name="toly"
                                handle="aeyakovenko"
                                avatarUrl="/twitter.jpg"
                                profileUrl="https://twitter.com/johndoe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 