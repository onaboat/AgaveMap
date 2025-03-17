'use client';

import { TwitterCard } from "@/app/ui/twittercard"
import { VideoCard } from "@/app/ui/videocard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileDocumentation } from "@/app/ui/file-documentation"
import { BlockBuildingMap } from "@/app/ui/block-building-map"
import { usePathname } from 'next/navigation'

export default function SigVerifyPage() {
    const pathname = usePathname();

    const files = [
        {
            filePath: "core/src/sigverify_stage.rs",
            role: "This file handles the signature verification stage, which is crucial after fetching transactions to ensure their validity.",
            functions: [{
                name: "verify_signatures",
                description: "Verifies the signatures of incoming transactions, ensuring they are valid before further processing.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["None (assumed to modify internal state or return a result)"],
                codeSnippet: { language: "rust", code: "fn verify_signatures(transactions: &[Transaction]) {\n    // Code to verify transaction signatures\n}" }
            }]
        },
        {
            filePath: "core/src/banking_stage/banking_stage.rs",
            role: "This file may handle aspects of signature verification as part of transaction processing.",
            functions: [{
                name: "verify_transaction_signatures",
                description: "Verifies the signatures of transactions during processing.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["None (assumed to modify internal state or return a result)"],
                codeSnippet: { language: "rust", code: "fn verify_transaction_signatures(transactions: &[Transaction]) {\n    // Code to verify transaction signatures\n}" }
            }]
        },
        {
            filePath: "core/src/repair/repair_service.rs",
            role: "This file may handle aspects of signature verification as part of the repair process.",
            functions: [{
                name: "verify_repair_signatures",
                description: "Verifies the signatures of transactions during the repair process.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["None (assumed to modify internal state or return a result)"],
                codeSnippet: { language: "rust", code: "fn verify_repair_signatures(transactions: &[Transaction]) {\n    // Code to verify transaction signatures for repair\n}" }
            }]
        },
        {
            filePath: "banks-client/src/lib.rs",
            role: "Manages client interactions, potentially involving signature verification.",
            functions: [{
                name: "verify_client_signatures",
                description: "Verifies client transaction signatures.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_client_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "banks-interface/src/lib.rs",
            role: "Defines interfaces for bank interactions, potentially involving signature verification.",
            functions: [{
                name: "verify_interface_signatures",
                description: "Verifies transaction signatures through the interface.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_interface_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "banks-server/src/lib.rs",
            role: "Manages server operations, potentially involving signature verification.",
            functions: [{
                name: "verify_server_signatures",
                description: "Verifies transaction signatures on the server.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_server_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "builtins/src/lib.rs",
            role: "Provides built-in functions that may involve signature verification.",
            functions: [{
                name: "verify_builtin_signatures",
                description: "Verifies signatures using built-in methods.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_builtin_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "compute-budget/src/lib.rs",
            role: "Manages compute budgets, potentially involving signature verification.",
            functions: [{
                name: "verify_compute_budget_signatures",
                description: "Verifies signatures related to compute budgets.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_compute_budget_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "compute-budget-instruction/src/lib.rs",
            role: "Manages instructions for compute budgets, potentially involving signature verification.",
            functions: [{
                name: "verify_compute_budget_instruction_signatures",
                description: "Verifies signatures for compute budget instructions.",
                inputs: [{ name: "instructions: &[Instruction]", description: "A slice of instructions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_compute_budget_instruction_signatures(instructions: &[Instruction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "poh/src/lib.rs",
            role: "Manages Proof of History, potentially involving signature verification.",
            functions: [{
                name: "verify_poh_signatures",
                description: "Verifies signatures related to PoH entries.",
                inputs: [{ name: "entries: &[Entry]", description: "A slice of entries to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_poh_signatures(entries: &[Entry]) -> Result<(), Error> {\n    // Code to verify PoH signatures\n}" }
            }]
        },
        {
            filePath: "program-runtime/src/lib.rs",
            role: "Manages program execution, potentially involving signature verification.",
            functions: [{
                name: "verify_program_signatures",
                description: "Verifies signatures for program transactions.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_program_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "runtime/src/lib.rs",
            role: "Manages runtime operations, potentially involving signature verification.",
            functions: [{
                name: "verify_runtime_signatures",
                description: "Verifies signatures for runtime transactions.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_runtime_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "fee/src/lib.rs",
            role: "Manages transaction fees, potentially involving signature verification.",
            functions: [{
                name: "verify_fee_signatures",
                description: "Verifies signatures related to transaction fees.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_fee_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify fee signatures\n}" }
            }]
        },
        {
            filePath: "runtime-transaction/src/lib.rs",
            role: "Manages transactions within the runtime, potentially involving signature verification.",
            functions: [{
                name: "verify_runtime_transaction_signatures",
                description: "Verifies signatures for runtime transactions.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_runtime_transaction_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        },
        {
            filePath: "merkle-tree/src/lib.rs",
            role: "Manages Merkle trees, potentially involving signature verification.",
            functions: [{
                name: "verify_merkle_tree_signatures",
                description: "Verifies signatures using Merkle tree structures.",
                inputs: [{ name: "leaves: &[Leaf]", description: "A slice of leaves to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_merkle_tree_signatures(leaves: &[Leaf]) -> Result<(), Error> {\n    // Code to verify signatures using Merkle trees\n}" }
            }]
        },
        {
            filePath: "merkle-root-bench/src/lib.rs",
            role: "Benchmarks Merkle root calculations, potentially involving signature verification.",
            functions: [{
                name: "benchmark_merkle_root_signatures",
                description: "Benchmarks the verification of signatures using Merkle roots.",
                inputs: [{ name: "leaves: &[Leaf]", description: "A slice of leaves to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn benchmark_merkle_root_signatures(leaves: &[Leaf]) -> Result<(), Error> {\n    // Code to benchmark signature verification using Merkle roots\n}" }
            }]
        },
        {
            filePath: "lattice-hash/src/lib.rs",
            role: "Manages lattice-based hash functions, potentially involving signature verification.",
            functions: [{
                name: "verify_lattice_hash_signatures",
                description: "Verifies signatures using lattice-based hash functions.",
                inputs: [{ name: "data: &[u8]", description: "A slice of data to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_lattice_hash_signatures(data: &[u8]) -> Result<(), Error> {\n    // Code to verify signatures using lattice-based hashes\n}" }
            }]
        },
        {
            filePath: "poseidon/src/lib.rs",
            role: "Manages Poseidon hash functions, potentially involving signature verification.",
            functions: [{
                name: "verify_poseidon_hash_signatures",
                description: "Verifies signatures using Poseidon hash functions.",
                inputs: [{ name: "data: &[u8]", description: "A slice of data to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_poseidon_hash_signatures(data: &[u8]) -> Result<(), Error> {\n    // Code to verify signatures using Poseidon hashes\n}" }
            }]
        },
        {
            filePath: "cost-model/src/lib.rs",
            role: "Manages cost models, potentially involving signature verification.",
            functions: [{
                name: "verify_cost_model_signatures",
                description: "Verifies signatures related to cost models.",
                inputs: [{ name: "transactions: &[Transaction]", description: "A slice of transactions to be verified" }],
                outputs: ["Result<(), Error>"],
                codeSnippet: { language: "rust", code: "fn verify_cost_model_signatures(transactions: &[Transaction]) -> Result<(), Error> {\n    // Code to verify signatures\n}" }
            }]
        }
    ];

    const summary = {
        title: "Summary",
        content: "Signature verification is a critical step to ensure the validity of transactions before they proceed further in the processing pipeline."
    };

    const relevantPaths = [
        "core/src/sigverify_stage.rs",
        "core/src/banking_stage/banking_stage.rs",
        "core/src/repair/repair_service.rs",
        "banks-client/src/lib.rs",
        "banks-interface/src/lib.rs",
        "banks-server/src/lib.rs",
        "builtins/src/lib.rs",
        "compute-budget/src/lib.rs",
        "compute-budget-instruction/src/lib.rs",
        "poh/src/lib.rs",
        "program-runtime/src/lib.rs",
        "runtime/src/lib.rs",
        "fee/src/lib.rs",
        "runtime-transaction/src/lib.rs",
        "merkle-tree/src/lib.rs",
        "merkle-root-bench/src/lib.rs",
        "lattice-hash/src/lib.rs",
        "poseidon/src/lib.rs",
        "cost-model/src/lib.rs"
    ];

    const relevantPackages = [
        { path: "core", package: "solana-core" },
        { path: "banks-client", package: "solana-banks-client" },
        { path: "banks-interface", package: "solana-banks-interface" },
        { path: "banks-server", package: "solana-banks-server" },
        { path: "builtins", package: "solana-builtins" },
        { path: "compute-budget", package: "solana-compute-budget" },
        { path: "program-runtime", package: "solana-program-runtime" },
        { path: "runtime", package: "solana-runtime" },
        { path: "merkle-tree", package: "solana-merkle-tree" }
    ];

    return (
        <div>
            <div className="bg-background-hero">
                <div className="container mx-auto p-12 gap-12 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold mb-6 text-white">Signature Verification Stage</h1>
                        <Button className="bg-primary-color hover:bg-primary-color/80 w-3/4">
                            <Link href="/block-building/sig-verify" className="w-full">
                                Clone Signature Verification Stage to your repo
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
                                title="Signature Verification by Joe C"
                                description="This video covers the Signature Verification Stage in the TPU, including how transactions are verified before processing."
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