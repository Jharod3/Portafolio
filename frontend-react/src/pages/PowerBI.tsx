import { useEffect, useState } from 'react';
import { getPowerBI } from '../services/api';
import type { PowerBIReport } from '../services/api';

const PowerBI = () => {
    const [reports, setReports] = useState<PowerBIReport[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPowerBI().then(setReports).catch(console.error).finally(() => setLoading(false));
    }, []);

    return (
        <div className="pt-24 px-4 max-w-7xl mx-auto pb-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Dashboards & Analítica</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    Visualizaciones interactivas creadas con Power BI y Python.
                </p>
            </div>

            {loading ? (
                <div className="max-w-4xl mx-auto bg-gray-200 dark:bg-slate-800 aspect-video rounded-xl animate-pulse"></div>
            ) : (
                <div className="space-y-16">
                    {reports.map((report) => (
                        <div key={report.id} className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-800">
                            <div className="p-6 border-b border-gray-100 dark:border-slate-800">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{report.title}</h2>
                                {report.description && <p className="text-gray-500 mt-1">{report.description}</p>}
                            </div>
                            <div className="aspect-video w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                {/* 
                           Iframe is disabled for security/example, usually you would embed real URL.
                           Using a placeholder for now.
                        */}
                                <div className="text-center p-8">
                                    <p className="mb-4 text-gray-500 dark:text-gray-400">Power BI Embed Placeholder</p>
                                    <a
                                        href={report.embedUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-2 bg-[#F2C811] text-black font-semibold rounded hover:bg-yellow-400 transition"
                                    >
                                        Abrir en Power BI
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {reports.length === 0 && (
                        <div className="text-center text-gray-500 py-12">No hay reportes públicos disponibles en este momento.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PowerBI;
