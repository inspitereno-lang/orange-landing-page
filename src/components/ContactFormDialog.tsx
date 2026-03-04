import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Mail, ArrowRight } from 'lucide-react';

const serviceTypes = [
    'International Flight Booking',
    'Visa Assistance',
    'Tour Packages',
    'Corporate Travel Mgmt',
];

interface ContactFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ContactFormDialog({ open, onOpenChange }: ContactFormDialogProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    phone_number: formData.phone,
                    service_type: formData.serviceType,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            alert('Thank you for your inquiry! We will contact you soon.');
            setFormData({ fullName: '', email: '', phone: '', serviceType: '' });
            onOpenChange(false);
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send the inquiry. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black flex items-center gap-2">
                        <Mail className="w-6 h-6 text-orange-500" />
                        Request a Consultation
                    </DialogTitle>
                    <DialogDescription>
                        Fill in the details below and our team will get in touch with you shortly.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label className="text-xs font-bold text-muted-foreground uppercase">
                                Full Name
                            </Label>
                            <Input
                                type="text"
                                placeholder="John Doe"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                        <div className="space-y-1">
                            <Label className="text-xs font-bold text-muted-foreground uppercase">
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs font-bold text-muted-foreground uppercase">
                            Phone Number
                        </Label>
                        <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-xs font-bold text-muted-foreground uppercase">
                            Service Type
                        </Label>
                        <Select
                            value={formData.serviceType}
                            onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        >
                            <SelectTrigger className="w-full bg-muted border-border rounded-lg focus:ring-orange-500 focus:border-orange-500">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                {serviceTypes.map((service) => (
                                    <SelectItem key={service} value={service}>
                                        {service}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-all flex items-center justify-center gap-2 h-auto disabled:opacity-70"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                        {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
