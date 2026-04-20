import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, LogOut, CheckCircle, PlusCircle, PenTool } from 'lucide-react';
import RichTextEditor from '../../components/RichTextEditor';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('Yönetici');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Check authentication
        if (localStorage.getItem('adminAuth') !== 'true') {
            navigate('/admin');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Bu aşamada normalde APi isteği atılır.
        // Static veriye ekleme simülasyonu (geliştirme amaçlı)
        console.log("İçerik Kaydedildi:", {
            title, description, category, author, image, content
        });
        
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            // Formu temizle
            setTitle('');
            setDescription('');
            setCategory('');
            setImage('');
            setContent('');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 relative">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            İçerik Yönetimi
                        </h1>
                        <p className="text-gray-400 mt-1">Yeni içerik oluşturun veya var olanları düzenleyin</p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-full transition-colors text-sm font-medium border border-red-500/20"
                    >
                        <LogOut size={16} />
                        <span>Çıkış Yap</span>
                    </button>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                        <div className="p-3 bg-blue-500/20 rounded-2xl">
                            <PenTool className="text-blue-400 w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-semibold text-white">Yeni İçerik Ekle</h2>
                    </div>

                    {success && (
                        <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 animate-pulse">
                            <CheckCircle className="text-green-400 w-6 h-6" />
                            <p className="text-green-200 font-medium">İçerik başarıyla kaydedildi!</p>
                        </div>
                    )}

                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">İçerik Başlığı</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all outline-none"
                                    placeholder="Örn: Yeni Nesil Teknolojiler"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Kategori</label>
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all outline-none"
                                    placeholder="Örn: Yazılım Geliştirme"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Kısa Açıklama (Özet)</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={2}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all outline-none resize-none"
                                placeholder="İçeriğinizin arama motorlarında ve listelerde görünecek özetini yazın..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1">Görsel URL Adresi</label>
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all outline-none"
                                placeholder="https://ornek.com/resim.jpg"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 ml-1 flex justify-between">
                                <span>İçerik Detayı</span>
                                <span className="text-xs text-gray-500">Editör kullanarak yazıyı formatlayın</span>
                            </label>
                            <RichTextEditor 
                                value={content}
                                onChange={setContent}
                                placeholder="İçeriğinizi buraya yazmaya başlayın..."
                            />
                        </div>

                        <div className="pt-6 border-t border-white/5 flex gap-4 justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-2xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                            >
                                <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>İçeriği Yayımla</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
