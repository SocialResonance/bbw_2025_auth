'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {
  RequestVerificationLinkOpts,
  ZkProof
} from '@rarimo/zk-passport';
import ZkPassportQrCode, {
  ProofRequestStatuses
} from '@rarimo/zk-passport-react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export function RarimoLogin() {
  const [open, setOpen] = useState(false);
  const [requestId, setRequestId] = useState('');

  const apiUrl = 'https://api.app.rarime.com';
  const eventId = '1'; // Example event ID

  const verificationOpts: RequestVerificationLinkOpts = {
    uniqueness: true,
    eventId: eventId
  };

  const handleRarimoLogin = () => {
    setRequestId(uuid());
    setOpen(true);
  };

  const onVerificationSuccess = (proof: ZkProof) => {
    console.log('Proof:', proof);
    alert('Verification successful!');
    setOpen(false);
  };

  const onVerificationError = (error: Error) => {
    console.error('Verification failed:', error);
    alert('Verification failed. Please try again.');
    setOpen(false);
  };

  const onStatusChange = (status: ProofRequestStatuses) => {
    console.log('Verification status:', status);
  };

  return (
    <>
      <Button onClick={handleRarimoLogin} className="w-full">
        Sign in with Rarimo
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scan with RariMe App</DialogTitle>
          </DialogHeader>
          {requestId && (
            <div className="p-4 flex justify-center">
              <ZkPassportQrCode
                apiUrl={apiUrl}
                requestId={requestId}
                verificationOptions={verificationOpts}
                qrProps={{ size: 256 }}
                onSuccess={onVerificationSuccess}
                onError={onVerificationError}
                onStatusChange={onStatusChange}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 
