import Foundation
import Vision
import CoreImage
import AppKit

// Usage: fgmask <input image> <output mask png>
// Subject cutout (the "lift subject" model), soft mask at the input's size.
let args = CommandLine.arguments
let inURL = URL(fileURLWithPath: args[1]), outURL = URL(fileURLWithPath: args[2])
let handler = VNImageRequestHandler(url: inURL, options: [:])
let req = VNGenerateForegroundInstanceMaskRequest()
try handler.perform([req])
guard let obs = req.results?.first else { fatalError("no subject") }
let buf = try obs.generateScaledMaskForImage(forInstances: obs.allInstances, from: handler)
let ci = CIImage(cvPixelBuffer: buf)
let ctx = CIContext()
guard let cg = ctx.createCGImage(ci, from: ci.extent, format: .L8, colorSpace: CGColorSpaceCreateDeviceGray()) else { fatalError("render") }
try NSBitmapImageRep(cgImage: cg).representation(using: .png, properties: [:])!.write(to: outURL)
print("ok", Int(ci.extent.width), Int(ci.extent.height), "instances", obs.allInstances.count)
