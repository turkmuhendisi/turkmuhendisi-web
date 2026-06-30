"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Bold, Italic, Heading1, Heading2, Code, Image as ImageIcon, Link, List, Quote } from 'lucide-react';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    // Initialize HTML content only exactly once if it's not matching our value state to avoid cursor jumps
    useEffect(() => {
        if (editorRef.current && value !== editorRef.current.innerHTML) {
            editorRef.current.innerHTML = value;
        }
    }, [value]);

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const executeCommand = (command: string, arg?: string) => {
        if (editorRef.current) {
            // Restore focus if needed
            editorRef.current.focus();
            document.execCommand(command, false, arg);
            handleInput();
        }
    };

    const addImage = () => {
        const url = prompt('Görsel URL adresini girin:');
        if (url) {
            executeCommand('insertImage', url);
        }
    };

    const addLink = () => {
        const url = prompt('Bağlantı URL adresini girin:');
        if (url) {
            executeCommand('createLink', url);
        }
    };

    const ToolbarButton = ({ icon: Icon, onClick, title }: { icon: any, onClick: () => void, title: string }) => (
        <button
            type="button"
            onClick={onClick}
            title={title}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
            <Icon size={18} />
        </button>
    );

    return (
        <div className={`w-full bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 ${isFocused ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/10'}`}>
            <div className="flex flex-wrap items-center gap-1 p-2 bg-white/5 border-b border-white/5">
                <ToolbarButton icon={Bold} onClick={() => executeCommand('bold')} title="Kalın" />
                <ToolbarButton icon={Italic} onClick={() => executeCommand('italic')} title="İtalik" />
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <ToolbarButton icon={Heading1} onClick={() => executeCommand('formatBlock', 'H2')} title="Başlık 1" />
                <ToolbarButton icon={Heading2} onClick={() => executeCommand('formatBlock', 'H3')} title="Başlık 2" />
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <ToolbarButton icon={Quote} onClick={() => executeCommand('formatBlock', 'BLOCKQUOTE')} title="Alıntı" />
                <ToolbarButton icon={Code} onClick={() => executeCommand('formatBlock', 'PRE')} title="Kod Bloğu" />
                <ToolbarButton icon={List} onClick={() => executeCommand('insertUnorderedList')} title="Madde İşaretli Liste" />
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <ToolbarButton icon={Link} onClick={addLink} title="Bağlantı Ekle" />
                <ToolbarButton icon={ImageIcon} onClick={addImage} title="Görsel Ekle" />
            </div>
            <div className="relative min-h-[300px] max-h-[600px] overflow-y-auto">
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="p-4 md:p-6 outline-none text-gray-200 prose prose-invert prose-blue max-w-none 
                    prose-a:text-blue-400 prose-img:rounded-xl prose-img:border prose-img:border-white/10 
                    prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
                    style={{ minHeight: '300px' }}
                    data-placeholder={placeholder}
                />
            </div>
            
            <style>{`
                [contenteditable]:empty:before {
                    content: attr(data-placeholder);
                    color: #6b7280;
                    pointer-events: none;
                    display: block;
                }
            `}</style>
        </div>
    );
};

export default RichTextEditor;
