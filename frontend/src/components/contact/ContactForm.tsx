'use client'

import { useState, useEffect, useActionState } from 'react'
import { User, Mail, Scroll, Send } from 'lucide-react'
import { submitContactForm } from '@/lib/contact'

export default function ContactForm() {
  //@ts-expect-error  idk why
  const [state, formAction] = useActionState(submitContactForm, { success: false, errors: {} })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [characterCount, setCharacterCount] = useState(0)

  useEffect(() => {
    setCharacterCount(message.length)
  }, [message])

  useEffect(() => {
    if (state.success !== undefined) {
      setIsSubmitting(false)
    }
  }, [state])

  return (
    <form action={formAction} onSubmit={() => setIsSubmitting(true)} className="w-full lg:w-3/5 glass-morphic p-6 rounded-lg neon-border pulse-effect">
      <div className="mb-4">
        <label htmlFor="name" className="block pixel-font text-sm mb-2">ENTER_USERNAME:</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676FE8]" size={18} />
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-[#1E1E3F] border border-[#676FE8] rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-[#676FE8] terminal-input"
            required
          />
        </div>
        <p className="text-xs mt-1 text-[#676FE8]">Enter your quest name</p>
        {state.errors?.name && <p className="text-xs mt-1 text-[#FF2E6C]">{state.errors.name[0]}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block pixel-font text-sm mb-2">COMMUNICATION_CODE:</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676FE8]" size={18} />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-[#1E1E3F] border border-[#676FE8] rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-[#676FE8] terminal-input"
            required
          />
        </div>
        <p className="text-xs mt-1 text-[#676FE8]">Secure communication channel</p>
        {state.errors?.email && <p className="text-xs mt-1 text-[#FF2E6C]">{state.errors.email[0]}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block pixel-font text-sm mb-2">QUEST_TOPIC:</label>
        <div className="relative">
          <Scroll className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#676FE8]" size={18} />
          <select
            id="subject"
            name="subject"
            className="w-full bg-[#1E1E3F] border border-[#676FE8] rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-[#676FE8] terminal-input"
            required
          >
            <option value="">Select your quest type</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
            <option value="Community Events">Community Events</option>
          </select>
        </div>
        {state.errors?.subject && <p className="text-xs mt-1 text-[#FF2E6C]">{state.errors.subject[0]}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block pixel-font text-sm mb-2">TRANSMIT_MESSAGE:</label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-[#1E1E3F] border border-[#676FE8] rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-[#676FE8] terminal-input min-h-[100px] resize-y"
            required
            minLength={20}
          ></textarea>
          <div className="absolute bottom-2 right-2 text-xs text-[#676FE8] pixel-font">
            {characterCount}/500
          </div>
        </div>
        <p className="text-xs mt-1 text-[#676FE8]">Detail your mission (min 20 characters)</p>
        {state.errors?.message && <p className="text-xs mt-1 text-[#FF2E6C]">{state.errors.message[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#4B50BE] hover:bg-[#676FE8] text-white pixel-font py-2 px-4 rounded-md transition-colors duration-300 relative overflow-hidden"
      >
        <div className="inset-0 flex items-center justify-center">
          <span className="text-lg mr-4">INITIALIZE_TRANSMISSION</span>
          <Send className={`transform transition-transform duration-300 ${isSubmitting ? 'translate-x-full opacity-0' : ''}`} size={18} />
        </div>
        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin"></div>
          </div>
        )}
      </button>

      {state.success && (
        <div className="mt-4 p-3 bg-[#50FF82] text-[#0A0A1E] rounded-md pixel-font text-sm">
          TRANSMISSION_SUCCESSFUL<br />
          Quest log received. Expect response within 24 hours.
        </div>
      )}

      {/* {state.success === false && state.errors && Object.keys(state.errors).length === 0 && ( */}
      {/*   <div className="mt-4 p-3 bg-[#FF2E6C] text-white rounded-md pixel-font text-sm"> */}
      {/*     TRANSMISSION_FAILED<br /> */}
      {/*     Please check your communication parameters and try again. */}
      {/*   </div> */}
      {/* )} */}
    </form>
  )
}

